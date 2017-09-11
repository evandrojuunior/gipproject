const UsersController = require('../controllers').Users;
const CompromisesController = require('../controllers').Compromises;


module.exports = app =>{
  app.post('/users', UsersController.create);
  app.post('/login', UsersController.login);
  app.get('/users', UsersController.index);

  app.post('/compromises', CompromisesController.create);
  app.get('/compromises', CompromisesController.index);
}
