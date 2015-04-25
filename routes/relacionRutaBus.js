var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

/* POST users listing. */
router.post('/', function (req, res, next) {
    
    Database.actuRutaActual(req.body.busEscogido);
    
    Database.ingresaRutaActual([req.body.busEscogido, req.body.rutaEscogida]);
    
    res.render('resultado', {titulo: 'Resultado', resultado: 'La ruta ha sido asignada exitosamente!'});
    
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {titulo: 'Inicio', error: ''});
});

module.exports = router;
