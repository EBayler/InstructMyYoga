const router = require('express').Router();
const posesController = require('../../controllers/posesController');

// Should this be 'class' instead of /poses?
router.route('/poses').get(posesController.findAllPoses);

module.exports = router;