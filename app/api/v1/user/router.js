const express = require("express")
const route = express()
const { create, index, update, destroy, findOneUser} = require('./controller')

route.post('/user', create)
route.get('/user', index)
route.put('/user/:id', update)
route.delete('/user/:id', destroy)
route.get('/user/:nama', findOneUser)

module.exports = route