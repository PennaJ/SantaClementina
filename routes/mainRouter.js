const express = require('express');
const router = express.Router();

const indexValidations = require('../Middlewares/IndexFormValidations')

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.post('/esMayor', mainController.esMayor)
router.get('/detalle-producto', mainController.detalleProducto)
router.post('/', indexValidations, mainController.formContacto)

module.exports = router;