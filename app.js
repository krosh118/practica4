var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var inicio = require('./routes/inicio');
var resultado = require('./routes/resultado');
var eliminar = require('./routes/eliminar');
var modificar = require('./routes/modificar');
var modificarBus = require('./routes/modificarBus');
var nuevaRuta = require('./routes/nuevaRuta');
var agregaPunto = require('./routes/agregaPunto');
var crearRuta = require('./routes/crearRuta');
var asignarRuta = require('./routes/asignarRuta');
var relacionRutaBus = require('./routes/relacionRutaBus');
var historialRuta = require('./routes/historialRuta');
var crearReservacion = require('./routes/crearReservacion');
var confirmarReservacion = require('./routes/confirmarReservacion');
var realizarPago = require('./routes/realizarPago');
var pago = require('./routes/pago');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/inicio', inicio);
app.use('/resultado', resultado);
app.use('/eliminar', eliminar);
app.use('/modificar', modificar);
app.use('/modificarBus', modificarBus);
app.use('/nuevaRuta', nuevaRuta);
app.use('/agregaPunto', agregaPunto);
app.use('/crearRuta', crearRuta);
app.use('/asignarRuta', asignarRuta);
app.use('/relacionRutaBus', relacionRutaBus);
app.use('/historialRuta', historialRuta);
app.use('/crearReservacion', crearReservacion);
app.use('/confirmarReservacion', confirmarReservacion);
app.use('/realizarPago', realizarPago);
app.use('/pago', pago);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
