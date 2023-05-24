

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
    }
}

module.exports = mainController;