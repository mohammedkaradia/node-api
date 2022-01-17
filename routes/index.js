const app = require('../app');
const homeController = require('../controllers/home');

const usersController = require('../controllers/lead');

module.exports = (app) =>{
  app.use('/', homeController);
}