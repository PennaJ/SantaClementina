const express = require('express');

mainController = {
    index: (req,res)=>{
        res.render('index');
    },
    detalleProducto: (req,res)=>{
        res.render('detalle-producto');
    }

}

module.exports = mainController;