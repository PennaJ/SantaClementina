const {check} = require('express-validator')
    
let indexValidations = [
        check('name').notEmpty().withMessage('Debe completar el campo nombre').bail(),
        check('email')
        .notEmpty().withMessage('Debe completar el campo email').bail()
        .isEmail().withMessage('Debe ingresar un email valido').bail(),
        check('motivoConsulta').notEmpty().withMessage('Seleccione un motivo para su consulta').bail(),
        check('detalleConsulta').notEmpty().withMessage('Por favor escriba el motivo de su consulta')
    ]


module.exports = indexValidations;