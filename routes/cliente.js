var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('resultado', {titulo: 'Resultado', resultado: req.body.id});
});

module.exports = router;
