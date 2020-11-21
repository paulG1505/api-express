const express = require("express");
const morgan = require("morgan");

const app = express();
//variables de entorno
app.set("port", process.env.PORT || 4000);

app.use(morgan("dev")); // para que escuche el server
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para que entienda lo que viene de un formulario

app.use( '/api/employees' ,require('./routes/employes.routes'))


module.exports = app;
