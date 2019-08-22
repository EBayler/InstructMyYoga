const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/:id').get(usersController.findUserById);
router.route('/:userId/:classId').get(usersController.findClassByUserIdAndClassId);

module.exports = router;



