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
        console.log(req.body)

        if(errors.isEmpty()){
            res.render('index')
        } else {
            res.render('index',{errors: errors.mapped(), old: req.body})
        }
    },
    nosotros: (req,res) => {
        res.render('aboutUs')
    }
}

module.exports = mainController;