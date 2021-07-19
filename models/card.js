const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Card = new Schema(
  {
    truth_or_bare: { type: String, required: true },
    content: { type: String, required: true },
    users: { type: Array, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('cards', Card)