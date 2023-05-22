const express = require('express')
const cors = require('cors')
const jsonParser = express.json()
const app = express()
const tweetController = require('./controllers/tweetController')
const userController = require('./controllers/userController')
app.use(cors())
app.use(jsonParser)

app.get('/', (_,res)=>{
    res.status(202).send('welcome to tweeter backend Checkout the frontend')
})
app.use('/tweets', tweetController)
app.use('/users', userController)
module.exports = app