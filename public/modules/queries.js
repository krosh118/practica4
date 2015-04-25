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

var obtenBus = "SELECT * FROM bus WHERE BUS = ?;";
exports.obtenBus = obtenBus;

var obtenBus2 = "SELECT * FROM bus WHERE PLACA = ?;";
exports.obtenBus2 = obtenBus2;

var updateBus = "UPDATE BUS SET PLACA = ?, TIPO = ?, CAPACIDAD = ? WHERE BUS = ?;";
exports.updateBus = updateBus;