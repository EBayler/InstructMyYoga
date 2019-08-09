const router = require('express').Router();
const posesController = require('../../controllers/posesController');

router.route('/').get(posesController.findAllPoses);

module.exports = router;