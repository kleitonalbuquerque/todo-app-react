const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const morgan = require('morgan')
const allowCors = require('./cors')

morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
})

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server