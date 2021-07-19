const db = require('../db/connection')
const Card = require('../models/card')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cards = 
      [
        {
          "truth_or_bare": "truth",
      "content": "What's the best piece of advice you've ever been given?",
          "users": []
  },
  {
    "truth_or_bare": "truth",
"content": "When you die, what do you want to be remembered for?",
    "users": []
  },
  {
    "truth_or_bare": "bare",
"content": "Tell me about the biggest challenge you have overcome",
    "users": []
  }
       
      ]

    await Card.insertMany(cards)
    console.log("Created cards!")
}
const run = async () => {
    await main()
    db.close()
}

run()