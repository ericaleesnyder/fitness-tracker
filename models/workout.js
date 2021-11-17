const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  // refer to seeders > seed.js to get the model properties
  // be judicious with what items get required

  // IF I CHOOSE CUSTOM METHODS:
  // custom methods:
  // totalDuration

  day: {
    type: Date,
    required: true,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true, 
        enum: ["resistance", "cardio"],
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        min: 0,
        required: true
      },
      weight: {
        min: 0,
        type: Number
      },
      reps: {
        min: 0,
        type: Number
      },
      sets: {
        min: 0,
        type: Number
      },
      distance: {
        min: 0,
        type: Number
      }
    }
  ]
});

// IF I CHOOSE CUSTOM METHODS:
// set up total duration custom method

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;