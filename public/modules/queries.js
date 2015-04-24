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