const express = require("express")
const route = express()
const { create, index, update } = require('./controller')

route.post('/categories', create)
route.get('/categories', index)
route.put('/categories/:id', update)

module.exports = route