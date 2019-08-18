const mongoose = require("mongoose");
const db = require("../models");
require ('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/instructMyYoga"
);

const yogaPoseSeed = [
  {
    poseId: "1",
    name: "Mountain Pose",
    sanskrit: "Tadasana",
    description:
      "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
    difficulty: "1",
    type: "Standing",
    benefits: ["balance", "presence"],
    image: "/images/1.jpg"
  },
  { 
    poseId: "2",
    name: "Crane (Crow) Pose",
    sanskrit: "Bakasana",
    description:
      "A compact arm balance, Bakasana tones and strengthens the abs and arms.",
    difficulty: "3",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: "./images/2.jpg"
  },
  { 
    poseId: "3",
    name: "Eight-Angle Pose",
    sanskrit: "Astravakrasana",
    description:
      "A difficult asymmetrical arm balance, Eight-Angle Pose",
    difficulty: "5",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: "/images/3.jpg"
  }
];

const classSeed = [
  { userName: process.env.USER_NAME,
    userImage: "https://lh4.googleusercontent.com/-Ya9AZqgHWV0/AAAAAAAAAAI/AAAAAAAAABs/LxYT6VoF_xM/s96-c/photo.jpg",
    userId: process.env.USER_ID,
    classes: [{
    className: "Demo Class",
    poses: [1, 2, 3, 4, 5, 6]
    }]
  },
  { userName: "Nena",
    userImage: "https://lh4.googleusercontent.com/-Ya9AZqgHWV0/AAAAAAAAAAI/AAAAAAAAABs/LxYT6VoF_xM/s96-c/photo.jpg",
    userId: "2",
    classes: [{
      className: "First Class",
      poses: [1, 2, 4, 6, 4, 1]
      },
      {
      className: "Second Class",
      poses: [1, 1, 1, 2, 1,]
    }]
  }
]

db.Pose 
  .remove({})
  .then(() => db.Pose.collection.insertMany(yogaPoseSeed))
  .then(insertedData => {
    console.log(insertedData.result);
    //process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(classSeed))
  .then(insertedData => {
    console.log("In user seed file");
    console.log(insertedData.result);
    process.exit(0);
  })


