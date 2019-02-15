const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getUsers (db = connection) {
  return db('users')
    .select()
}

function getWishList (id,db = connection) {
  return db('gifts')
    .where('user_id', id)
    .select()
}

function addWish (newGift, db = connection) {
  newGift = {
    user_id: newGift.id,
    url: newGift.url,
    item: newGift.item,
    purchased: false
  }
  return db('gifts')
    .insert(newGift)
}

module.exports = { getUsers, getWishList, addWish }
