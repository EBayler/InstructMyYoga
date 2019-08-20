const db = require('../models');

module.exports = {
  findUserById: function(req, res) {
    console.log("In the usersController.js findUserById method");
    db.User
    .find(req.userId)
    .then(users => res.json(users))
    .catch(err => res.status(422).json(err));
  }
}