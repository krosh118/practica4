var SQLGETSINGLEDATA = "SELECT * " + 
               "FROM usuario " +
               "WHERE id = ? ";
exports.SQLGETSINGLEDATA = SQLGETSINGLEDATA;

var SQLSAVESINGLEDATA = "INSERT INTO tabla ( " +
                "nombre , apellidos, edad, " +
      "direccion, correo, telefono, celular) " +
      "VALUES (?,?,?,?,?,?,?)";
exports.SQLSAVESINGLEDATA = SQLSAVESINGLEDATA;

var comprobarCredenciales = "SELECT * FROM usuario WHERE nombre = ? AND password = ?;";
exports.comprobarCredenciales = comprobarCredenciales;

var cargarBuses = "SELECT * FROM bus;";
exports.cargarBuses = cargarBuses;

var insertBus = "INSERT INTO bus (placa , tipo, capacidad)VALUES (?,?,?)";
exports.insertBus = insertBus;

var delBus = "DELETE FROM bus WHERE BUS = ?;";
exports.delBus = delBus;