let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Arms",
        name: "Bicep Curl",
        weight: 100,
        sets: 4,
        reps: 10
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Arms",
        name: "Tricep pulldowns",
        weight: 75,
        sets: 3,
        reps: 10
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Arms",
        name: "Forearm curls on preacher bench",
        weight: 15,
        sets: 3,
        reps: 10
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Back",
        name: "Wide grip lat pull downs",
        weight: 150,
        sets: 3,
        reps: 10
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Back",
        name: "Close grip horizontal rows",
        weight: 150,
        sets: 3,
        reps: 10
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Chest",
        name: "Flat bench press",
        weight: 135,
        sets: 3,
        reps: 8
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Chest",
        name: "ISO incline bench press",
        weight: 90,
        sets: 3,
        reps: 12
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Cardio",
        name: "Tredmill",
        duration: 30,
        distance: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Cardio",
        name: "Stationary cycle",
        duration: 30,
        distance: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Legs",
        name: "Sit down calf raises",
        weight: 120,
        sets: 3,
        reps: 15
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "Legs",
        name: "Smith machine squats",
        weight: 100,
        sets: 3,
        reps: 10
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
