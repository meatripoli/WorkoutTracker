const db = require('../models/Excericise');
module.exports = function(app) {

    app.get("/api/workouts/range", (req, res) => {
        console.log("inside /api/workouts/range route");
        db.find({})
        .then(dbExcericise => {
            console.log(dbExcericise);
            res.json(dbExcericise);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    });

    app.get("/api/workouts",(req,res) => {
        console.log("inside /api/workouts get route");
        db.find({}).then( data => {
            console.log(data);
            res.json(data);
        })
    })

    app.post("/api/workouts", ({ body }, res) => {
        console.log("inside /api/workouts post route");
        console.log(body);
        let newRecord = {
            day: new Date().setDate(new Date().getDate()-10),
            exercises: []
            //     {
            //     type: body.exercises.type,
            //     name: body.exercises.name,
            //     duration: body.exercises.duration,
            //     weight: body.exercises.weight,
            //     reps: body.exercises.reps,
            //     sets: body.exercises.sets,
            //     distance: body.exercises.distance
            //     }
            // ]
        }
        ///do we need to add the date in the create and update statements
        db.create(newRecord)
        .then(dbExcericise => {
            console.log(dbExcericise);
            res.json(dbExcericise);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("Body: ");
        console.log(req.body)
        console.log("ID: "+req.params.id);
        console.log("inside /api/workouts/:id put route");
        let newExercise = {
            type: body.exercises.type,
            name: body.exercises.name,
            duration: body.exercises.duration,
            weight: body.exercises.weight,
            reps: body.exercises.reps,
            sets: body.exercises.sets,
            distance: body.exercises.distance
        }
        db.update({_id: req.params.id},{$push: {exercises: newExercise}})
        .then(dbExcericise => {
            console.log(dbExcericise);
            res.json(dbExcericise);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
    });

};