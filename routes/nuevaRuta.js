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

    app.use(bodyParser.json());

    Database.getPuntos('hola', function (res3) {

        Database.getPuntosAsignados('hola', function (res4) {

            res.render('nuevaRuta', {titulo: 'Práctica 4', puntos: res3, puntosAsignados: res4});

        });

    });

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {titulo: 'Inicio', error: ''});
});

module.exports = router;
