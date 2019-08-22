const db = require('../models');

module.exports = {
  findUserById: function(req, res) {
    console.log(`Searching from findUserById: ${req.params.id}`);
    db.User
    .findOne(req.params.userId)
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err));
  },
  findClassByUserIdAndClassId: function(req, res) {
    console.log(`Searching from findClassbyUserIDAndClassId for ${req.params.userId}`);
    db.User
    .findOne({userId: req.params.userId})
    .then(user => res.json(user))
    .catch(err => res.status(422).json(err))
  } 
}

