const express = require('express');
const router = express.Router();

const indexValidations = require('../Middlewares/IndexFormValidations')

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.post('/', indexValidations, mainController.formContacto)
router.post('/esMayor', mainController.esMayor)

router.get('/detalle-producto', mainController.detalleProducto)
router.get('/nosotros', mainController.nosotros)

module.exports = router;