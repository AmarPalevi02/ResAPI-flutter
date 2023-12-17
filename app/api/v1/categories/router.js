const express = require("express")
const route = express()
const { create, index, update, destroy } = require('./controller')

route.post('/categories', create)
route.get('/categories', index)
route.put('/categories/:id', update)
route.delete('/categories/:id', destroy)

module.exports = route