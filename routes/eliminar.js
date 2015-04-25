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

Database.eliminarBus(req.body.placaBorrar);

res.render('resultado', {titulo: 'Resultado', resultado: 'El bus ha sido borrado exitosamente!'});
    
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
