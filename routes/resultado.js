var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

var tipo;
var capacidad;

/* POST users listing. */
router.post('/', function (req, res, next) {

if(req.body.tipo == 1){
    tipo = "Economico";
}else{
    tipo = "Empresarial";
}

if(req.body.capacidad == 1){
    capacidad = "45";
}else{
    capacidad = "35";
}

Database.insertarBus([req.body.placa,tipo,capacidad]);

res.render('index', {titulo: 'Inicio', error: 'Credenciales incorrectas'});
    
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
