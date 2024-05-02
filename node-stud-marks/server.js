const express = require("express")
const mongoose = require("mongoose")
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/marks',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to database")
})

app.use(express.json())
app.listen(PORT,()=>{
    console.log("Listening to the port !!!!");
})

const marksschema = new mongoose.Schema({
    Name : String,
    Roll_No : String,
    WAD_Marks : Number,
    CC_Marks : Number,
    DSBDA_Marks : Number,
    CNS_Marks :Number,
    AI_MArks : Number
})

const marksmodel = mongoose.model("allmarks",marksschema)
app.get('/getmarks',async(req,res)=>{
    try{
        const count = await marksmodel.countDocuments();
        const doc = await marksmodel.find();
        res.send({count,doc});
    }
    catch{
        console.log("Error !!!!!!!")
    }
})
app.post('/putmarks',async(req,res)=>{
    try{
        const data = req.body;
        const d = await marksmodel.insertMany(data);
        res.send("Succesfullly inserted the data");
    }
    catch
    {
        console.log("Error !!!!!!");
    }
})
app.get('/dcbdamin',async(req,res)=>
{
    try{
        const docs = await marksmodel.find({DSBDA_Marks:{$gt:20}});
        const names = docs.map(doc => doc.Name);
        res.send(names);
    }
    catch
    {
        console.log("Error !!!!!!");
    }
})
app.put('/updatemarks/:name',async(req,res)=>{
    try{
        const name  = req.params.name;
        const doc  = await marksmodel.findOneAndUpdate({Name:name},{$inc:{DSBDA_Marks:10,WAD_Marks:10,CC_Marks:10,CNS_Marks:10,AI_MArks:10}},{new:true});
        res.send(doc);
    }
    catch
    {
        console.log("Error !!!");
    }
})
app.get('/allmin',async(req,res)=>{
   try
   {
    const doc  = await marksmodel.find({$and:[{WAD_Marks:{$gt:25}},{CC_Marks:{$gt:25}}]});
    const names = doc.map(docs=>docs.Name);
    res.send(names);
   }
   catch
   {
    console.log("Error !!!!!!");
   }
})

app.get('/allmax',async(req,res)=>{
    try
    {
     const doc  = await marksmodel.find({$and:[{WAD_Marks:{$lt:40}},{CC_Marks:{$lt:40}}]});
     const names = doc.map(docs=>docs.Name);
     res.send(names);
    }
    catch
    {
     console.log("Error !!!!!!");
    }
 })

 app.delete('/deletes/:name',async (req,res)=>{
    try{
        const name = req.params.name;
        const doc  = await marksmodel.deleteOne({Name:name});
        res.send(doc);
    }
    catch{
        console.log("Error !!!!!");
    }
 })

 app.get('/display', async (req, res) => {
    try {
        const docs = await marksmodel.find(); // Fetch all documents from the collection
        let tableHtml = '<table><tr><th>Name</th><th>Roll_No</th><th>WAD_Marks</th><th>CC_Marks</th><th>DSBDA_Marks</th><th>CNS_Marks</th><th>AI_marks</th></tr>';
        
        // Iterate over each document and generate table rows
        docs.forEach(doc => {
            tableHtml += `<tr><td>${doc.Name}</td><td>${doc.Roll_No}</td><td>${doc.WAD_Marks}</td><td>${doc.CC_Marks}</td><td>${doc.DSBDA_Marks}</td><td>${doc.CNS_Marks}</td><td>${doc.AI_MArks}</td></tr>`;
        });
        
        tableHtml += '</table>';
        
        res.send(tableHtml); // Sending the HTML table as response
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Error occurred");
    }
});
