const db = require("../../models");
// const express = require("express");
// const router = express.Router();


//    app.get("/api/books", function(req, res) {
//       // Here we add an "include" property to our options in our findAll query
//       // We set the value to an array of the models we want to include in a left outer join
//       // In this case, just db.Post
//       db.Book.findAll({
//          include: [db.Post]
//       }).then(function(dbBook) {
//          res.json(dbBook);
//       });
//    });

//   app.get("/api/authors/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

module.exports = function(app) {


   app.post("/api/members", (req, res) => {
      db.Member.create({name : req.body.name, 
         email : req.body.email}).then((dbMember) => {
         res.json(dbMember);

      });
   });

};

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });


