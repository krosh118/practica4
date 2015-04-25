var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

/* POST users listing. */
router.post('/', function (req, res, next) {

    Database.insertarRuta([parseInt(req.body.origen), parseInt(req.body.destino)]);
    
    Database.obtenerRuta('hola', function (res2) {
        
        var ruta = res2.toca;
        
        Database.cargarPuntosAAsociar2('hola', function (res3) {
            
            for (i = 0; i < res3.length; i++) {
                Database.asociarPuntos([(ruta+1), res3[i].PUNTO]);
            }
            
            Database.borrarTemporal('hola');
        
        });
        
    });
    
    res.render('resultado', {titulo: 'Resultado', resultado: 'La ruta ha sido agregada exitosamente!'});

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {titulo: 'Inicio', error: ''});
});

module.exports = router;
