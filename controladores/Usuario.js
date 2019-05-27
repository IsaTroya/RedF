'use strict'

var Usuario = require('../modelos/Usuario');

function home(req, res){
	res.status(200).send({
		message: 'API funciona'
	});
	
	}

function pruebas(req, res){
	console.log(req.body);
	res.status(200).send({
		message: 'Acción de pruebas en el servidor de NodeJS'
	});
	}


	module.exports = {
		home,
		pruebas
	}