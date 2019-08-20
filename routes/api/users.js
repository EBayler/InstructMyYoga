const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/:id').get(usersController.findUserById);

module.exports = router;



