const router = require("express").Router();
const poseRoutes = require("./poses");

// Should this use poses, class or something else? 
router.use("/pose", poseRoutes);
//router.use("/books", bookRoutes);

module.exports = router;
