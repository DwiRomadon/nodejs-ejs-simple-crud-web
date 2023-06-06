const express = require('express').Router()
const controller = require('../controller/ControllerDosen')

express.get('/', controller.getDataWeb)
express.get('/input-dosen', controller.viewInputDosen)
express.post('/input-dosen', controller.inputDosen)
express.get('/:nidn', controller.deleteDosen)

module.exports = express