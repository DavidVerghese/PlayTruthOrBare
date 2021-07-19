const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const getUsers = async (req, res) => {
  try {
      const users = await User.find()
      res.json(users)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        res.status(201).json({ token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (await bcrypt.compare(password, user.password_digest)) {
            const payload = {
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(payload, TOKEN_KEY)
            res.status(201).json({ token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const verify =  async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const payload = jwt.verify(token, TOKEN_KEY)
        if(payload) {
            res.json(payload)
        }
    } catch (e) {
        res.status(401).send('Not Authorized')
    }
}

const changePassword = async (req, res) => {
  const { id } = req.params

  let numOfKeys = Object.keys(req.body).length;
  let password = req.body.password;

  const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
  req.body.password_digest = password_digest;

    await User.findByIdAndUpdate(id, req.body, { new: true }, (error, card) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!card) {
            return res.status(404).json({ message: 'User not found!' })
        }
      if (numOfKeys !== 1) {
          return res.status(404).json({ message: 'Too many!' })
      }
      if (!password) {
        return res.status(404).json({ message: 'Change the password' })
      }
        res.status(200).json(card)
    })
}

module.exports = {
    getUsers,
    signUp,
    signIn,
    verify,
    changePassword
}