const express = require('express');

const ongController = require('../src/controller/ongsController');
const incidentsController = require('../src/controller/incidentsController');
const profileController = require('../src/controller/profileController');
const sessionController = require('../src/controller/sessionController');

const routes = express.Router();

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/incidents',incidentsController.index);
routes.post('/incidents',incidentsController.create);
routes.delete('/incidents/:id',incidentsController.delete);


routes.get('/profile',profileController.index);

routes.post('/sessions',sessionController.create);

module.exports = routes;
