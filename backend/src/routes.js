const express = require('express');

const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/incidentController')

const ProfileController = require('./controllers/profileController')

const SessionController = require('./controllers/sessionController')

const routes = express.Router();

//LOGIN
routes.post('/session', SessionController.create);

//ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//profile
routes.get('/profile',ProfileController.index);

//incidentes
routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;