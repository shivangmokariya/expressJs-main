const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    // console.log("welcome to the home page");
    res.send("welcome to the home page")
});
app.get('/about',(req,res)=>{
    // console.log("welcome to the about page");    
    res.send("welcome to the about page")
});
app.get('/contact',(req,res)=>{
    // console.log("welcome to the contact us page");
    // res.send("welcome to the contact page")
    res.status(200).send("welcome to the contact page")
}); 
app.get("/temp",(req,res)=>{
    // console.log("welcome to temp page");
    // res.send([{
    //     names:"shivang",
    //     id:121,
    //     username:"shivangmokariya"
    // },
    // {
    //     names:"nimda",
    //     id:121,
    //     username:"shivangmokariya"
    // },
    // {
    //     names:"shivang",
    //     id:121,
    //     username:"shivangmokariya"
    // },
    // {
    //     names:"shivang",
    //     id:121,
    //     username:"shivangmokariya"
    // }]);

    res.json([{
        names:"shivang",
        id:121,
        username:"shivangmokariya"
    },
    {
        names:"nimda",
        id:121,
        username:"shivangmokariya"
    },
    {
        names:"shivang",
        id:121,
        username:"shivangmokariya"
    },
    {
        names:"shivang",
        id:121,
        username:"shivangmokariya"
    }]);


});

app.listen(3200,()=>{
    console.log("server is running on port 3200");
});