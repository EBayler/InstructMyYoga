const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const yogaPoseSeed = [
  {
    name: "Mountain Pose",
    sanskrit: "Tadasana",
    description:
      "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
    difficulty: "1",
    type: "Standing",
    benefits: ["balance", "presence"],
    image: ""
  },
  { 
    name: "Crane (Crow) Pose",
    sanskrit: "Bakasana",
    description:
      "A compact arm balance, Bakasana tones and strengthens the abs and arms.",
    difficulty: "3",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: ""
  },
  { 
    name: "Eight-Angle Post",
    sanskrit: "Astravakrasana",
    description:
      "A difficult asymmetrical arm balance, Eight-Angle Pose",
    difficulty: "5",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: ""
  }
];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });