const app = require("express").Router();
const Workout = require("../models/workout-model.js");


app.get("/api/workouts", (req, res) => {

});

app.get("/api/workouts/range", (req, res) => {

});

app.post("/api/workouts", ({ body }, res) => {

});

app.post("/api/workouts/:id", ({ body,params }, res) => {
  let id = params.id;

});

module.exports = app;
