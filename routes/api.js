const router = require('express').Router();
const Workout = require('../models/Workout.js');

// refer to public > api.js to get the routes needed
// refer to fetch requests

// GET all workouts /api/workouts
// returns an array

router.get('/api/workouts', async (req, res) => {
  try {
    const dbWorkout = await Workout.aggregate(
      [
        { $addFields: { totalDuration: { $sum: "$exercises.duration"} } }
      ]
    );
    res.json(dbWorkout)
  } catch (error) {
    res.status(400).json(err);
  }
})

// PUT a workout /api/workouts/:id 
router.put('/api/workouts/:id', async (req, res) => {
  try{
    const workout = await Workout.updateOne(
      {_id: req.params.id},
      { $push: {exercises: req.body }}     
      );

    res.json(workout);
  } catch (error) {
    res.status(400).json(err);
  }
})
// POST a workout /api/workouts
router.post('/api/workouts', async (req, res) => {
  try{
    const workout = await Workout.create(req.body);
    res.json(workout);
  } catch (error) {
    res.status(400).json(err);
  }
})
// GET workouts in a range /api/workouts/range
router.get('/api/workouts/range', async (req, res) => {
  try {
    const dbWorkout = await Workout.aggregate(
      [
        { $addFields: { totalDuration: { $sum: "$exercises.duration"} } }
      ]
    );
    res.json(dbWorkout);
  } catch (error) {
    res.status(400).json(err);
  }
})

module.exports = router;