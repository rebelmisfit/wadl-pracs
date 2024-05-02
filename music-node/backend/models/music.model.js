const mongoose=require('mongoose');
const MusicSchema=mongoose.Schema(
  {
   songname:{
    type:String,
    required:[true,'Please enter song name'],
   },
   filmname:{
    type:String,
    required:[true,'Plaase enter filmname'],
   },
   musicdirector:{
    type:String,
    required:[true,'Please enter music director'],
   },
   singer:{
    type:String,
    required:[true,'Please enter singer']
   },
   actor:{
    type:String,
    required:[true,'Please enter actor']
   },
   actress:{
    type:String,
    required:[true,'Please enter actress']
   }

  },
  {
    timestamps:true,
  }
);

const Music=mongoose.model("Music",MusicSchema);
module.exports=Music;

