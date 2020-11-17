const router = require("express").Router();
const commentsRoute = require("./comments");
const createRoute = require("./create");

// go to /api/comments
router.use("/comments", commentsRoute);
router.use("/create", createRoute);

module.exports = router;

