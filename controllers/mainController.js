

mainController = {
    index: (req,res)=>{
        let ageCheck = req.ageCheck
        console.log(ageCheck)
        res.render('index',{ageCheck});
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