const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3400;
var hbs = require("hbs");
const fs=require('fs');
const requests = require("request");

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.set("view engine", "hbs");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

const templatepath = path.join(__dirname, "../templates/views");
app.set("views", templatepath);

app.get("", (req, res) => {
  res.render("index");
});

// app.get("/api", (req, res) => {
//         requests("https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=f91fcd1579d24a239e63d59386308b3b"
//         ).on('data',(chunk)=>{
//           const objData=JSON.parse(chunk);
//           const arrData=[objData];
//           const temp=Math.round(arrData[0].main.temp-273.15);
//           // console.log(Math.round(arrData[0].main.temp-273.15));
//           // console.log(arrData[0].name);
//           const city=arrData[0].name;
//           console.log(`temerature is ${temp}&#8451 and city name is ${city}`);

//           res.send(`temerature is ${temp}&#8451 and city name is ${city}`);
//         });
        
// });


app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
