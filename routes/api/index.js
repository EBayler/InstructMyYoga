const router = require("express").Router();
const poseRoutes = require("./poses");
const userRoutes = require("./users");

// Should this use poses, class or something else? 
router.use("/poses", poseRoutes);
router.use("/users", userRoutes);

module.exports = router;
