// const express = require('express');
// const app= express();
// app.get("/",(req,res)=>{

//     res.send("hello from express home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("hello from the about page in express");
// });

// app.listen(3000,()=>{
//     console.log("server is listening on port 3000");
// }); 





































const express=require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.write('hello from express home page');
    res.send();
});
app.get('/about',(req,res)=>{
    res.write("hello from express about page");
    res.send();
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});



















