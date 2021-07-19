const db = require('../db/connection')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = 
      [
        {
          "username": "david",
      "email": "dj.verghese@gmail.com",
          "password_digest": "123456",
          "cards": []
        },
        {
          "username": "john",
      "email": "john@john.com",
          "password_digest": "123456",
          "cards": []
  },
       
      ]

    await User.insertMany(users)
    console.log("Created users!")
}
const run = async () => {
    await main()
    db.close()
}

run()