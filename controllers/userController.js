const express = require('express')
const users = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {findUser, addUser} = require('../queries/users')
const tweets = require('./tweetController')
users.use('/:userId/shorts', tweets)
users.post('/signup', async (req, res) => {
  const {email, username, shorty, password} = req.body
  const user = await findUser(email)
  if (user.length === 1) {
    res.status(405).json({error: 'email already exist'})
  } else if (user.length === 0) {
    // res.status(202).send('ok')
    bcrypt.hash(password, 10, async (e, hash) => {
      if (e) {
        res.status(e).json({error: 'server error'})
      }
      const newUser = {
        email,
        username,
        shorty,
        password: hash,
      }
      var flag = 1
      const addedUser = await addUser(newUser)
      if (addedUser.error) {
        flag = 0
        res.status(500).send(addedUser.error)
      } else {
        flag = 1
        res
          .status(200)
          .json({message: 'User added successfully, not verified.'})
      }
      if (flag) {
        const token = jwt.sign({email: user.email}, process.env.SECRET_KEY)
      }
    })
  }
})
users.post('/login', async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await findUser(email)
    if (user.length === 0) {
      res.status(405).json({error: 'Email not found, register now.'})
    } else {
      bcrypt.compare(password, user[0].password, (e, result) => {
        if (e) {
          res
            .status(500)
            .json({error: 'Something went wrong, please try again later.'})
        } else if (result) {
          const token = jwt.sign(
            {email: email, password: password},
            process.env.SECRET_KEY
          )
          res
            .status(200)
            .json({message: 'Login succesful', token: token, user: user})
        } else if (!result) {
          res.status(400).json({error: 'Incorrect Password or Email'})
        }
      })
    }
  } catch (e) {
    console.log(e)
    res
      .status(500)
      .json({error: 'Server Error while trying to login, please try again.'})
  }
})

module.exports = users
