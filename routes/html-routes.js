const path = require("path");
// var db = require("../models");
// js template literal pages
const indexPage = require("../views/index.js");
const exercisePage = require("../views/exercise.js");
const statsPage = require("../views/stats.js");


module.exports = function(app) {

  app.get("/", function(req, res) {
    console.log("inside / route send to home page")
    res.send(indexPage.render());
  });
  app.get("/exercise", function(req, res) {
    console.log("inside /exercise route send to excercise page")
    res.send(exercisePage.render());
  });
  app.get("/stats", function(req, res) {
    console.log("inside /stats route send to dashboard page")
    res.send(statsPage.render());
  });

  // This needs to be the last route defined (render 404 for unmatched routes)
  app.get("*", function(req, res) {
    console.log("inside * route redirect to home page")
    res.redirect("/")
  });
};