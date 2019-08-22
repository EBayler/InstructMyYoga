const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/instructMyYoga"
);

const yogaPoseSeed = [{
    poseId: "1",
    name: "Mountain Pose",
    sanskrit: "Tadasana",
    description: "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
    difficulty: "1",
    type: "Standing",
    benefits: ["balance", "presence"],
    image: "/images/1.jpg"
  },
  {
    poseId: "2",
    name: "Crane (Crow) Pose",
    sanskrit: "Bakasana",
    description: "A compact arm balance, Bakasana tones and strengthens the abs and arms.",
    difficulty: "3",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: "./images/2.jpg"
  },
  {
    poseId: "3",
    name: "Eight-Angle Pose",
    sanskrit: "Astravakrasana",
    description: "A difficult asymmetrical arm balance, Eight-Angle Pose",
    difficulty: "5",
    type: "Arm Balance",
    benefits: ["balance", "strength"],
    image: "/images/3.jpg"
  },
  {
    poseId: "4",
    name: "Lotus Pose",
    sanskrit: "Padmasana",
    description: "The ultimate yoga pose, Lotus Pose requires open hips and consistent practice.",
    difficulty: "3",
    type: "arm balance",
    benefits: ["calmness", "stimulation"],
    image: "/images/4.jpg"
  },
  {
    poseId: "5",
    name: "Full Lord of the Dance",
    sanskrit: "Natarajasana",
    description: "Natarajasana is usually performed as the final pose of a series of challenging backbends.",
    difficulty: "5",
    type: "arm balance",
    benefits: ["strength", "balance"],
    image: "/images/5.jpg"
  },
  {
    poseId: "6",
    name: "Scorpion Handstand",
    sanskrit: "Vrschikasana 2",
    description: "The entire front of the body is stretched, especially the chest, neck, spine and abs.",
    difficulty: "5",
    type: "arm balance",
    benefits: ["strength", "balance"],
    image: "/images/6.jpg"
  },
  {
    poseId: "7",
    name: "Warrior I Pose",
    sanskrit: "Virabhadrasana I",
    description: "Virabhadra's Pose is also known as the Warrior Pose (there are three variation of Warrior, of which this is customarily numbered I).",
    difficulty: "3",
    type: "standing",
    benefits: ["strength", "balance"],
    image: "/images/7.jpg"
  },
  {
    poseId: "8",
    name: "Half Pigeon",
    sanskrit: "Kapotasana",
    description: "Full body stretch that stimulates abdominal organs.",
    difficulty: "2",
    type: "core strength",
    benefits: ["strength", "balance"],
    image: "/images/8.jpg"
  },
    {
      poseId: "9",
      name: "High Cobra",
      sanskrit: "Bhujangasana",
      description: "Serpent posture to increase spine flexibility.",
      difficulty: "3",
      type: "standing",
      benefits: ["strength", "balance"],
      image: "/images/9.jpg"
    }
];

const classSeed = [{
    userName: "Jim",
    userImage: "https://lh4.googleusercontent.com/-Ya9AZqgHWV0/AAAAAAAAAAI/AAAAAAAAABs/LxYT6VoF_xM/s96-c/photo.jpg",
    userId: "3",
    classes: [{
      classId: 1,
      classTitle: "Demo Class",
      poses: [1, 2, 3, 4, 5, 6]
    }]
  },
  {
    userName: "Nena",
    userImage: "https://lh4.googleusercontent.com/-Ya9AZqgHWV0/AAAAAAAAAAI/AAAAAAAAABs/LxYT6VoF_xM/s96-c/photo.jpg",
    userId: "2",
    classes: [{
        classId: 1,
        classTitle: "First Class",
        poses: [1, 2, 4, 6, 4, 1]
      },
      {
        classId: 2,
        classTitle: "Second Class",
        poses: [1, 1, 1, 2, 1, ]
      }
    ]
  },
  {
    userName: process.env.USER_NAME,
    userImage: "https://lh5.googleusercontent.com/-Yby-HH9zn7Q/AAAAAAAAAAI/AAAAAAAAAA8/ikwCbMWOwFI/s96-c/photo.jpg",
    userId: process.env.USER_ID,
    classes: [{
      classId: 1,
      classTitle: "Get Bendy",
      poses: [6, 4, 3, 5, 9, 1]
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