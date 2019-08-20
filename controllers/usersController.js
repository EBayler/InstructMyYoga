const db = require('../models');

module.exports = {
  findUserById: function(req, res) {
    console.log(`Searching for ${req.body}`);
    db.User
    .find(req.params.userId)
    .then(users => res.json(users))
    .catch(err => res.status(422).json(err));
  }
}