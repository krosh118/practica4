var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Práctica 4', otro: 'Anibal' });
});

module.exports = router;
