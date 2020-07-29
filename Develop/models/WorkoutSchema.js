const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a workout name.",
      },

      name: {
        type: String,
        trim: true,
        required: "Please enter a workout name.",
      },

      duraton: {
        type: String,
        trim: true,
        required: "Please enter a workout name.",
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
