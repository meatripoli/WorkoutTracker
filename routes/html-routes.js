const path = require("path");
// js template literal pages
const indexPage = require("../views/index.js");
const exercisePage = require("../views/exercise.js");
const statsPage = require("../views/stats.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send(indexPage.render());
  });
  app.get("/exercise", function(req, res) {
    res.send(exercisePage.render());
  });
  app.get("/stats", function(req, res) {
    res.send(statsPage.render());
  });
  // This needs to be the last route defined
  //it catches any undefined routes and redirects to home page
  app.get("*", function(req, res) {
    res.redirect("/")
  });
};
