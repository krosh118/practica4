// dependencies
var mysql = require('mysql');
var queries = require('./queries');

// run query to db
var dbConfig = {
   host:'localhost',
   user:'root',
   password:'',
   database:'practica4'
};

var runQuery = function(Query,Data,callback){
   var connection = mysql.createConnection(dbConfig);
   connection.connect(function(err) {
      if (err) throw err;
   });
   
   connection.query(Query,Data,function(err, res){
         if (err) throw err;
         if (callback){
            callback(res);
         }
      }
   );
        connection.end();
}

// module
var DB = function(config){
   config = config || {};
}

DB.prototype.getSingleData = function(data,callback){
   var Query = queries.SQLGETSINGLEDATA;
   var Data  = [data];
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.getCredencialesValidas = function(data,callback){
   var Query = queries.comprobarCredenciales;
   var Data  = data;
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.getBuses = function(data,callback){
   var Query = queries.cargarBuses;
   var Data  = data;
   runQuery(Query,Data,function(res){
      callback(res);
   });
}

DB.prototype.getPuntos = function(data,callback){
   var Query = queries.cargarPuntos;
   var Data  = data;
   runQuery(Query,Data,function(res){
      callback(res);
   });
}

DB.prototype.getPuntosAsignados = function(data,callback){
   var Query = queries.cargarPuntosAsignados;
   var Data  = data;
   runQuery(Query,Data,function(res){
      callback(res);
   });
}

DB.prototype.cargarPuntosAAsociar2 = function(data,callback){
   var Query = queries.cargarPuntosAAsociar;
   var Data  = data;
   runQuery(Query,Data,function(res){
      callback(res);
   });
}

DB.prototype.saveSingleData = function(data){
   var Query = queries.SQLSAVESINGLEDATA;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.asociarPuntos = function(data){
   var Query = queries.asociarPunto;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.insertarBus = function(data){
   var Query = queries.insertBus;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.insertarRuta = function(data){
   var Query = queries.insertRuta;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.agregarPunto = function(data){
   var Query = queries.agregaPunto;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.borrarTemporal = function(data){
   var Query = queries.borrarTemp;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.eliminarBus = function(data){
   var Query = queries.delBus;
   var Data  = data;
   runQuery(Query,Data);
}

DB.prototype.obtenerBus = function(data,callback){
   var Query = queries.obtenBus;
   var Data  = data;
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.obtenerRuta = function(data,callback){
   var Query = queries.obtenRuta;
   var Data  = data;
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.obtenerBus2 = function(data,callback){
   var Query = queries.obtenBus2;
   var Data  = data;
   runQuery(Query,Data,function(res){
      res = res.pop();
      callback(res);
   });
}

DB.prototype.actualizarBus = function(data){
   var Query = queries.updateBus;
   var Data  = data;
   runQuery(Query,Data);
}

module.exports = DB;