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

    if (req.body.tipo == 1) {
        tipo = "Economico";
    } else {
        tipo = "Empresarial";
    }

    if (req.body.capacidad == 1) {
        capacidad = "45";
    } else {
        capacidad = "35";
    }

    Database.obtenerBus2(req.body.anterior, function (res2) {
        
        Database.actualizarBus([req.body.placa, tipo, capacidad, res2.BUS]);

        res.render('resultado', {titulo: 'Resultado', resultado: 'El bus ha sido modificado exitosamente!'});

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index', {nombre: 'Anibal Gramajo', usuario: nombreUsuario});
});

module.exports = router;
