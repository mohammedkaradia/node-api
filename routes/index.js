const app = require('../app');
const homeController = require('../controllers/home');

const usersController = require('../controllers/users');

module.exports = (app) =>{
  app.use('/', homeController);
  app.use('/users', usersController);
}