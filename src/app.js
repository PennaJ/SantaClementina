const express = require('express');
const path = require('path')
const session = require('express-session');
const bodyParser = require('body-parser');


const app = express();

//Use session
app.use(session({
    secret: 'PennaJ Rules', 
    cookie: { maxAge: 86400000 },
    resave: false,
    saveUninitialized: false
}))

//Middleware global
//AgeCheck

function ageCheckMiddleware(req,res,next){
    res.locals.ageCheck = req.session.ageCheck;
    next()
}

app.use(ageCheckMiddleware);

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

//Set Public path
const publicPath = path.join(__dirname, '../public');

//Set EJS as view engine
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

