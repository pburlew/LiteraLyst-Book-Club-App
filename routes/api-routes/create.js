const express = require("express");
const router = express.Router();
const db = require("../../models");

// go to /api/comments
router.post("/book", (req, res, next) => {
   console.log("im here");
   db.Book.create(req.body).then(
      res.render("books")
   ).catch(err => {
      res.status(500);
      next(err);
   });
   
});

module.exports = router;
