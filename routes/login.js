var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Login', { nombre: 'Anibal Gramajo' });
});

module.exports = router;