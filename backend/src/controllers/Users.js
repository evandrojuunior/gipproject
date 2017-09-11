const User = require('../models').User;

module.exports = {
  index(req, res){
    return User.findAll()
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    return User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpf: req.body.cpf,
        school: req.body.school,
        birthday: req.body.birthday,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    return User
    .findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));

  }
};
