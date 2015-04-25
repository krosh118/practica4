var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {


    Database.obtenerDetalles(req.body.facturaEscogida, function (res2) {
        
        res.render('verDetalles', {titulo: 'Resultado', detalles: res2, factura: req.body.facturaEscogida});

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
