const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    cards: { type: Array, required: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)