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

DB.prototype.saveSingleData = function(data){
   var Query = queries.SQLSAVESINGLEDATA;
   var Data  = data;
   runQuery(Query,Data);
}

module.exports = DB;