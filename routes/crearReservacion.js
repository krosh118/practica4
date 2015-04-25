var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {


    Database.getBuses('hola', function (res2) {

        Database.getPuntos('hola', function (res3) {

            Database.getPuntosAsignados('hola', function (res4) {

                res.render('reservacion', {titulo: 'Práctica 4', codigoUsuario: req.body.idUsuario, buses: res2, puntos: res3, puntosAsignados: res4});

            });

        });

    });


    //res.render('resultado', {titulo: 'Resultado', resultado: req.body.idUsuario});
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
