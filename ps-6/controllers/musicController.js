const Song = require('../models/songModel');

// Controller functions for different operations

// Add new song
exports.addNewSong = async (req, res) => {
    try {
        const newSong = await Song.create(req.body);
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// List all songs
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete song by ID
exports.deleteSong = async (req, res) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.id);
        if (!deletedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add more controller functions as needed
