const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const MusicInstance=require('./models/music.model.js');
const musicRoute=require('./routes/music.route.js');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/music",musicRoute);

app.get("/",(req,res)=>{
  res.send('Hello from Node Server Music');
});

mongoose.connect("mongodb://localhost:27017/Assignment_3b").then(()=>{
console.log('Connected to db!');
app.listen(3000,()=>{
 console.log('Server is running on port 3000!');
});
}).catch(()=>{
console.log('Error in connecting');
});

