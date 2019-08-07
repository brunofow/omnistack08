const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);


module.exports = routes;

/*
ObjectIdDiego = 5d4a17ffd8e27912d8fad82a 
ObjectIdFilipe = 5d4a17ded8e27912d8fad829
*/
