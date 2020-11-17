const express = require("express");
const router = express.Router();


// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   res.render("members");
});
 
module.exports = router;