var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();
router.post('/', function (req, res, next) {

    Database.insertarReserva([req.body.idUsuario, req.body.origen, req.body.destino, req.body.salida, req.body.llegada, req.body.bus]);
    
    Database.obtenerReserva('hola', function (res2) {
        
        var ruta = (res2.toca+1);
        
        console.log(ruta);
        
        Database.cargarPuntosAAsociar2('hola', function (res3) {
            
            for (i = 0; i < res3.length; i++) {
                Database.asociarPuntosReserva([ruta, res3[i].PUNTO]);
            }
            
            Database.borrarTemporal('hola');
            
            res.render('resultado', {titulo: 'Resultado', resultado: 'La reservación se ha realizado exitosamente.'});
        
        });

    });

});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
