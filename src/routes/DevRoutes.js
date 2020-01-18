const {Router} = require('express');
const routes = Router();

const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController');


routes.post('/insert', DevController.store);
routes.get('/', DevController.index);
routes.delete('/destroy',DevController.destroyAll);

routes.get('/search', SearchController.index);

module.exports = routes;