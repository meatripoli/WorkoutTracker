const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcericiseSchema = new Schema({
  type: { type: String },
  name: { type: String },
  duration: { type: Number },
  weight: { type: Number },
  sets: { type: Number },
  reps: { type: Number },
  distance: { type: Number }
});

const Excericise = mongoose.model("Excericise", ExcericiseSchema);

module.exports = Excericise;
