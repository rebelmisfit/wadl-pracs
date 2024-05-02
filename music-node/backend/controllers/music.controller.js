const Music=require('../models/music.model.js');

const getAllMusic=async (req,res)=>{
try{
const musics=await Music.find({});
res.status(200).json(musics);
}catch(error){
  res.status(500).json({message:error.message});
}
};

const addnewSong=async (req,res)=>{
 try{
 console.log(req.body);
 const product=await Music.create(req.body);
 res.status(200).json(product);
 }catch(error){
  res.status(500).json({message:error.message});
 }

};

const getMusicByDirector=async(req,res)=>{
  const {director}=req.params;
  console.log(director)
  try{
   const music=await Music.findOne({musicdirector:director});
   res.status(200).json(music);
  }catch(error){
   res.status(500).json({message:error.message}); 
  }

};

const deleteMusic=async(req,res)=>{
  res.status(200).json({message:'delete music'})

};
const deleteMusicBySong=async(req,res)=>{
  const {songname}=req.params;
  try{
  const deltedMusic=await Music.findOneAndDelete({songname:songname});
  if(!deltedMusic){
    return res.status(404).json({message:"Not found"});
  }
  res.status(200).json({message:'Delted successfully'},deltedMusic);
  }catch(error){
    res.status(500).json({message:error.message});
  }

};
const getMusicBySinger=async(req,res)=>{
  const {singer}=req.params;
  try{
   const music=await Music.find({singer:singer});
   res.status(200).json(music);
  }catch(error){
   res.status(500).json({message:error.message}); 
  }

};

const updateMusic=async(req,res)=>{
 const {songname}=req.params;

 try{
 const music=await Music.findOneAndUpdate({songname:songname},req.body);
 res.status(200).json({message:'Updated ',music});
 }catch(error){
  res.status(500).json({message:error.message});
 }

};
module.exports={
getAllMusic,
addnewSong,
getMusicByDirector,
deleteMusic,
getMusicBySinger,
updateMusic,
deleteMusicBySong
}