// html-routes.js - this file offers a set of routes for sending users to the various html pages
// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

   // Each of the below routes just handles the HTML page that the user gets sent to.

   // index route loads home.html
   app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/home.html"));
   });

   //currently reading
   app.get("/currentlyreading", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/currently.html"));
   });

   //managebooks
   app.get("/managebooks", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/manage_books.html"));
   });


   //manage members
   app.get("/managemembers", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/manage_members.html"));
   });

   //on future list
   app.get("/onlist", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/onlist.html"));
   });

   //previously read
   app.get("/previously", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/previously.html"));
   });

   
   //reviews
   app.get("/reviews", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/reviews.html"));
   });
};