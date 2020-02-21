var db = require("../models");
// js template literal pages
var index = require("../views/index.js");
const exercise = require("../views/exercise.js");
const stats = require("../views/stats.js");
//const notFound = require("../views/404.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.send(index.render());
  });
  // new exercise
  app.get("/exercise", function(req, res) {
    res.send(exercise.render());
  });

  // continue exercise
  app.get("/exercise?", function(req, res) {
    res.redirect("/");
  })

  // dashboard
  app.get("/stats", function(req, res) {
    res.send(stats.render());
  })
  
  // This needs to be the last route defined
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
