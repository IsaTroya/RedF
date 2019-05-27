'use strict' //utilizar nuevas caractersticas de java script
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
//conexion data base
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/RedSocial', {useMongoCLient: true})

.then(() => {
	console.log("la conexion a la base de datos RedSocial se ha realizado correctamente");
//crear servidor
app.listen(port, () => {
	console.log("servidor corriendo en http://localhost:3800");
});
})
.catch(err => console.log(err));
