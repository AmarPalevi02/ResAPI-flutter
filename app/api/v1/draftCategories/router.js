const express = require('express')
const route = express()
const { create, index, destroy } = require('./controller')
const uploadMidleware = require('../../../middlewares/multer')

route.post('/draftCategories', uploadMidleware.single('avatar'), create)
route.get('/draftCategories', index)
route.delete('/draftCategories/:id', destroy)

module.exports = route