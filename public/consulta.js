// dependencies
var DB = require('./modules/database');
var Database = new DB();

Database.getSingleData(1,function(res){
   console.log(res.nombre);
});