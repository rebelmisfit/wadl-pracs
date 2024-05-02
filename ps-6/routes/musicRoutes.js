const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// Define routes
router.post('/add', musicController.addNewSong);
router.get('/list', musicController.getAllSongs);
router.delete('/delete/:id', musicController.deleteSong);

// Add more routes as needed

module.exports = router;
