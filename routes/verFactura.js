var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {

    console.log(req.body.idUsuario);
    
    Database.obtenerFacturas(req.body.idUsuario, function (res2) {
        
        res.render('verFacturas', {titulo: 'Práctica 4', codigoUsuario: req.body.idUsuario, facturas: res2});

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
