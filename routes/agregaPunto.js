var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

var nombreUsuario;
var password;

/* POST users listing. */
router.post('/', function (req, res, next) {

    Database.agregarPunto(req.body.punto);

    res.render('resultado', {titulo: 'Resultado', resultado: 'El punto ha sido agregado exitosamente!'});

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {titulo: 'Inicio', error: ''});
});

module.exports = router;
