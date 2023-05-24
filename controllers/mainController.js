const {validationResult} = require('express-validator');

mainController = {
    index: (req,res)=>{
        res.render('index');
    },
    detalleProducto: (req,res)=>{
        res.render('detalle-producto');
    },
    esMayor(req,res) {    
        req.session.ageCheck = 1;
        res.redirect('/')
    },
    formContacto(req,res) {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            console.log('todo ok para enviar el mail')
        } else {
            res.render('index',{errors: errors.mapped(), old: req.body})
        }
    }
}

module.exports = mainController;