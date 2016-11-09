const express = require('express')
const router = express.Router()
const Model = require('./model.instrumento.js')
const Controller = require('./controller.instrumento')(Model)

// console.log('Controller', Controller.findAll)

/* GET home page. */
router.get('/',  Controller.findAll)
// router.get('/:id',  Controller.findById)
// router.get('/',  Controller.findAll)

module.exports = router
