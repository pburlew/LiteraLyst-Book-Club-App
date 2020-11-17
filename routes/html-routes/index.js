const express = require("express");
const router = express.Router();
const booksRoute = require("./books");
const joinRoute = require("./join");
const searchRoute = require("./search");
const membersRoute = require("./members");

// get route -> index
router.get("/", (req, res) => {
   res.render("index");
});



// comments page
router.use("/books", booksRoute);
router.use("/join", joinRoute);
router.use("/search", searchRoute);
router.use("/members", membersRoute);


module.exports = router;
