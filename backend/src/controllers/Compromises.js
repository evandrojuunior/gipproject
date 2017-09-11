const Compromise = require('../models').Compromise;

module.exports = {
  index(req, res){
    return Compromise
    .findAll()
    .then(users => res.status(201).send(users))
    .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    return Compromise
      .create({
        name: req.body.name,
        date: req.body.date,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};
