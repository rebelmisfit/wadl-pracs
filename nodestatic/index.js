const express = require("express")
const path = require("path")
const app  = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.listen(3000,()=>
{
    console.log("Server running .....")
})