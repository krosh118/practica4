var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

/* POST users listing. */
router.post('/', function (req, res, next) {

    Database.cargarRutas('hola', function (res2) {
        
        Database.getBuses('hola', function (res3) {
        
            res.render('asignacionBusesRutas', {titulo: 'Resultado', rutas: res2, buses: res3});

        });
        
    });

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {titulo: 'Inicio', error: ''});
});

module.exports = router;
