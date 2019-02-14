const express = require('express')

const db = require('../../db')

const router = express.Router()

router.use(express.json())

router.get('/users', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})
module.exports = router
