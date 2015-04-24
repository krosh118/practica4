var express = require('express');
var router = express.Router();

var DB = require('../public/modules/database');
var Database = new DB();

var nombreUsuario;

Database.getSingleData(1,function(res){
   nombreUsuario = res.NOMBRE;
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', { nombre: 'Anibal Gramajo', usuario:nombreUsuario });
});

module.exports = router;
