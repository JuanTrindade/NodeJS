const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsControllers = require('./controllers/IncidentsControllers');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/Profile', ProfileController.index);

routes.get('/incidents', IncidentsControllers.index);
routes.post('/incidents', IncidentsControllers.IncidenstCreate);
routes.delete('/incidents/:id', IncidentsControllers.delete) 

module.exports = routes;