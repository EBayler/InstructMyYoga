const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poseSchema = new Schema({
  name: { type: String, required: true },
  sanskrit: { type: String, required: true },
  description: String,
  difficulty: String,
  type: String,
  benefits: Array,
  image: String
});


const Pose = mongoose.model("Pose", poseSchema);

module.exports = Pose;
