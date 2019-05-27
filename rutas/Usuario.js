'use strict'
//cargar modulo de express
var express = require('express');
var UserController = require('../controladores/Usuario');
var api = exress.Router(); //para tener acceso a los etodos get, post,delete etc
//definir cada una de las rutas
api.get('/home',UserController.home); //path home y metodo a cargar es UserController
api.get('/pruebas', UserController.pruebas);

module.exports = api;