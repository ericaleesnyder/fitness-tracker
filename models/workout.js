const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  // refer to seeders > seed.js to get the model properties
  // be judicious with what items get required
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;