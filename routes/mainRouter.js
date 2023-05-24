const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index)
router.post('/esMayor', mainController.esMayor)
router.get('/detalle-producto', mainController.detalleProducto)

module.exports = router;