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

module.exports = { getUsers, getWishList }
