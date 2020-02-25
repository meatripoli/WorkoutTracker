const db = require('../models/Excericise');
module.exports = function(app) {

    app.get("/api/workouts/range", (req, res) => {
        console.log("inside /api/workouts/range route");
        // db.Excericise.find({})
        // .then(dbExcericise => {
        //     console.log(dbExcericise);
        //     res.json(dbExcericise);
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.json(err);
        // });
    });

    app.post("/api/workouts", ({ body }, res) => {
        console.log("inside /api/workouts route");
        console.log(body);
        // db.Excericise.create(body)
        // .then(dbExcericise => {
        //     console.log(dbExcericise);
        //     res.json(dbExcericise);
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.json(err);
        // });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("Body: "+req.body);
        console.log("ID: "+req.params.id);
        console.log("inside /api/workouts/:id route");
        // db.Excericise.update(body)
        // .then(dbExcericise => {
        //     console.log(dbExcericise);
        //     res.json(dbExcericise);
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.json(err);
        // });
    });

    ///api/workouts/
    //db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}})
};

/*
  workoutData.type = "resistance";
  workoutData.name
  workoutData.weight
  workoutData.sets
  workoutData.reps
  workoutData.duration

  workoutData.type = "cardio";
  workoutData.name
  workoutData.distance
  workoutData.duration
*/