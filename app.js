const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.listen(3000,()=>{
    console.log("the server is listening on port 3000");
})