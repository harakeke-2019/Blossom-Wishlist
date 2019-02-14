const path = require('path')
const express = require('express')
const router = require('./routes/routes')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/app', router)

module.exports = server
