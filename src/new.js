requests(
    "https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=f91fcd1579d24a239e63d59386308b3b"
  ).on("data", (chunk) => {
    const objData = JSON.parse(chunk);
    // console.log(objData)
    const arrData = [objData];
    // console.log(objData);
    // console.log(arrData[0].main.temp-273.15);
   fs.writeFileSync("shivang/api.json",chunk);
    
    const dataApi =fs.readFileSync("shivang/api.json","utf-8");
    const objData1=JSON.parse(dataApi);
    // console.log(dataApi)
    res.end(dataApi);
  });