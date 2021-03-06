const db = require("../../models");

module.exports = function(app) {
   app.get("/api/books", (req, res) => {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Book.findAll({
         include: [db.Post]
      }).then((dbBook) => {
         res.json(dbBook);
      });
   });

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


   app.post("/api/books", (req, res) => {
      db.Book.create(req.body).then((dbBook) => {
         res.json(dbBook);
      });
   });

   //   app.delete("/api/authors/:id", function(req, res) {
   //     db.Author.destroy({
   //       where: {
   //         id: req.params.id
   //       }
   //     }).then(function(dbAuthor) {
   //       res.json(dbAuthor);
   //     });
   //   });

};
