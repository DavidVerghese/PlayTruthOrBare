const Card = require('../models/card')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getCards = async (req, res) => {
    try {
        const cards = await Card.find()
        res.json(cards)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getCard = async (req, res) => {
    try {
        const { id } = req.params
        const card = await Card.findById(id)
        if (card) {
            return res.json(card)
        }
        res.status(404).json({ message: 'Card not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createCard = async (req, res) => {
    try {
        const card = await new Card(req.body)
        await card.save()
        res.status(201).json(card)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateCard = async (req, res) => {
    const { id } = req.params
    await Card.findByIdAndUpdate(id, req.body, { new: true }, (error, card) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!card) {
            return res.status(404).json({ message: 'Card not found!' })
        }
        res.status(200).json(card)
    })
}

const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Card.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Card deleted")
        }
        throw new Error("Card not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCard,
    getCards,
    getCard,
    updateCard,
    deleteCard
}
