var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

var DB = require('../public/modules/database');
var Database = new DB();

var nombreUsuario;
var password;

/* POST users listing. */
router.post('/', function (req, res, next) {

    app.use(bodyParser.json());

    Database.getCredencialesValidas([req.body.nombre, req.body.password], function (res2) {
        
        if (res2 != null) {

            if (res2.TIPO == 2) {
                
                res.render('cliente', {titulo: 'Práctica 4', nombre: res2.NOMBRE, password: res2.PASSWORD});

            }else{
                
                Database.getBuses('hola', function (res3) {
                    
                    res.render('admin', {titulo: 'Práctica 4', nombre: res2.NOMBRE, password: res2.PASSWORD, buses: res3});
                    
                });
                
            }

        } else {
            
            res.render('index', {titulo: 'Inicio', error: 'Credenciales incorrectas'});
            
        }
        
    });

    
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
