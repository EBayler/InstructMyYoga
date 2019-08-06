const db = require('../models');

module.exports = {
  findAllPoses: function(req, res) {
    console.log(`I'm in Find All Poses in the poses Controller!`);
    db.Pose
    .find({})
    .then(poses => res.json(poses));
  }
}