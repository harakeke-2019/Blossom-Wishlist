const express = require('express')

const db = require('./db')

const router = express.Router()

router.use(express.json())

module.exports = router
