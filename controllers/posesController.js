const db = require('../models');

module.exports = {
  findAllPoses: function(req, res) {
    db.Pose
    .find({})
    .then(poses => res.json(poses));
  }
}