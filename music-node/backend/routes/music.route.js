const express=require('express');
const MusicInstance=require('../models/music.model.js');
const router=express.Router();
const {getAllMusic,
  addnewSong,
  getMusicByDirector,
  deleteMusic,
  getMusicBySinger,
  updateMusic,deleteMusicBySong} = require('../controllers/music.controller.js');

  router.get('/',getAllMusic);
  router.post('/',addnewSong);
  router.delete('/',deleteMusic);
  router.delete('/deletebysong/:songname',deleteMusicBySong);

  router.get('/getbydirector/:director',getMusicByDirector);
  router.get('/getbysinger/:singer',getMusicBySinger);
  router.put('/:songname',updateMusic);

  module.exports=router;
  
