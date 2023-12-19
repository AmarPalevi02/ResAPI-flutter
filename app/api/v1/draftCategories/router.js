const express = require('express')
const route = express()
const { create, index } = require('./controller')
const uploadMidleware = require('../../../middlewares/multer')

route.post('/draftCategories', uploadMidleware.single('avatar'), create)
route.get('/draftCategories', index)

module.exports = route