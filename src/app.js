const express = require('express');
const app = express();
const path = require('path')

const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'ejs');
const mainRouter = require('../routes/mainRouter.js');

const PORT = 3000;

app.listen(PORT, ()=>
console.log('Servidor corriendo en el puerto ' + PORT));

//uso estatico
app.use(express.static(publicPath));
//carpeta de views
app.set("views",path.join(__dirname,"./views"))

app.use('/', mainRouter);