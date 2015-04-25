var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {


    Database.cargarReservaciones(req.body.idUsuario, function (res2) {
        
        res.render('realizarPago', {titulo: 'Práctica 4', codigoUsuario: req.body.idUsuario, reservas: res2});

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
