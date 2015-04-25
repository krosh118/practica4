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

var cargarPuntos = "SELECT * FROM punto;";
exports.cargarPuntos = cargarPuntos;

var agregaPunto = "INSERT INTO TEMP (PUNTO) VALUES (?);";
exports.agregaPunto = agregaPunto;

var cargarPuntosAsignados = "SELECT PUNTO.PUNTO, NOMBRE FROM PUNTO, TEMP WHERE TEMP.PUNTO = PUNTO.PUNTO;";
exports.cargarPuntosAsignados = cargarPuntosAsignados;

var cargarPuntosAAsociar = "SELECT * FROM TEMP;";
exports.cargarPuntosAAsociar = cargarPuntosAAsociar;

var borrarTemp = "TRUNCATE TEMP;";
exports.borrarTemp = borrarTemp;

var insertBus = "INSERT INTO bus (placa , tipo, capacidad)VALUES (?,?,?)";
exports.insertBus = insertBus;

var insertRuta = "INSERT INTO ruta (origen ,destino)VALUES (?,?);";
exports.insertRuta = insertRuta;

var asociarPunto = "INSERT INTO RUTA_PUNTO (RUTA ,PUNTO)VALUES (?,?);";
exports.asociarPunto = asociarPunto;

var delBus = "DELETE FROM bus WHERE BUS = ?;";
exports.delBus = delBus;

var obtenBus = "SELECT * FROM bus WHERE BUS = ?;";
exports.obtenBus = obtenBus;

var obtenRuta = "SELECT max(ruta) as toca FROM ruta;";
exports.obtenRuta = obtenRuta;

var obtenBus2 = "SELECT * FROM bus WHERE PLACA = ?;";
exports.obtenBus2 = obtenBus2;

var updateBus = "UPDATE BUS SET PLACA = ?, TIPO = ?, CAPACIDAD = ? WHERE BUS = ?;";
exports.updateBus = updateBus;

var cargarRuta = "SELECT RUTA.RUTA as CODIGO, P1.NOMBRE as ORIGEN, P2.NOMBRE as DESTINO FROM RUTA, PUNTO P1, PUNTO P2 WHERE P1.PUNTO = RUTA.ORIGEN AND P2.PUNTO = RUTA.DESTINO;";
exports.cargarRuta = cargarRuta;

var actualizarRutaActual = "UPDATE BUS_RUTA SET ESTADO = 'VENCIDO' WHERE BUS = ? AND ESTADO = 'ACTIVO';";
exports.actualizarRutaActual = actualizarRutaActual;

var ingresarRutaActual = "INSERT INTO BUS_RUTA(BUS, RUTA, ESTADO) VALUES (?, ?, 'ACTIVO');";
exports.ingresarRutaActual = ingresarRutaActual;

var reporteAsignaciones = "SELECT BUS.BUS, BUS.PLACA, P1.NOMBRE AS ORIGEN, P2.NOMBRE AS DESTINO, BUS_RUTA.ESTADO, BUS_RUTA.FECHA FROM BUS, PUNTO P1, PUNTO P2, BUS_RUTA, RUTA WHERE P1.PUNTO = RUTA.ORIGEN AND P2.PUNTO = RUTA.DESTINO AND RUTA.RUTA = BUS_RUTA.RUTA AND BUS_RUTA.BUS = BUS.BUS;";
exports.reporteAsignaciones = reporteAsignaciones;