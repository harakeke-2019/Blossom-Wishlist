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

router.get('/wishList/:id', (req, res) => {
  db.getWishList(req.params.id)
    .then((wishList) => {
      res.json(wishList)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/addWish', (req, res) => {
  db.addWish(req.body)
    .then(() => {
      res.json('Good job')
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

router.post('/updateGifts', (req, res) => {
  const wishIds = getWishIds(req.body)
  db.updateWishes(wishIds)
    .then(() => {
      res.json('Good job')
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

function getWishIds(wishes) {
  return wishes.map(wish => {
    return wish.id
  })
}

module.exports = router
