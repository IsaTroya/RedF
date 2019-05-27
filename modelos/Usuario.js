'use strict'

var mongoose = require('mongoose');
vas Schema = moongoose.Schema;
var UsuarioSchema = Schema({
    nombre: String,
    apellido: String, 
    sexo: String,
    pais: String,
    ciudad: String,
    numero_telefonico: String,
    edad: Int,
    cedula: String,
    correo: String,
    clave: String,

});

module.exports = mongoose.model('Usuario', UsuarioSchema);
