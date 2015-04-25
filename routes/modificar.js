var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

/* POST users listing. */
router.post('/', function (req, res, next) {

    Database.obtenerBus(req.body.placaModificar, function (res2) {
        
        res.render('modificar', {titulo: 'Modificar', placa: res2.PLACA});

    });

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
