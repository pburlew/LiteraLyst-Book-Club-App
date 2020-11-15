const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /commnets
router.get("/", (req, res) => {
   // get comments from db and send to template
   db.Book.findAll({})
      .then((books) => {
         res.render("books", {
            books: books,
         });
      })
      .catch((err) => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
