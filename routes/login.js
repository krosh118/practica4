var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var app = express();

//var DB = require('../public/modules/database');
//var Database = new DB();

var nombreUsuario;
var password;

//Database.getSingleData(1,function(res){
//   nombreUsuario = res.NOMBRE;
//});

/* POST users listing. */
router.post('/', function(req, res, next) {
    
  app.use(bodyParser.json());  
    
    
  res.render('Login', { nombre: req.body.nombre, password: req.body.password });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
