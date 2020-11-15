// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // Dependencies
// // ===========================
// const express = require("express");
// const router = express.Router();


// // Routes

// // Each of the below routes just handles the HTML page that the user gets sent to.

// // index route loads home.html
// router.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/home.html"));
// });

// //currently reading
// router.get("/currentlyreading", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/currently.html"));
// });

// //managebooks
// router.get("/managebooks", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/manage_books.html"));
// });


// //manage members
// router.get("/managemembers", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/manage_members.html"));
// });

// //on future list
// router.get("/onlist", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/onlist.html"));
// });

// //previously read
// router.get("/previously", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/previously.html"));
// });


// //reviews
// router.get("/reviews", (req, res) => {
//    res.sendFile(path.join(__dirname, "../public/reviews.html"));
// });


// module.exports = router;