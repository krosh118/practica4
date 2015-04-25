var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {


    Database.obtenerMonto(req.body.reservaEscogida, function (res2) {
        
        Database.insertarFactura([req.body.reservaEscogida, res2.TOTAL]);
        
        Database.actualizarReserva(req.body.reservaEscogida);
        
        res.render('resultado', {titulo: 'Resultado', resultado: "El pago ha sido realizado exitosamente!"});

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
