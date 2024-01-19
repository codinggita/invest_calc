const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req,res)=>{
    res.send("Hello User...! Welcome to My Website Invest Calc Home Page");
    console.log(res);
});

app.get("/calculators", (req,res)=>{
    res.send("Hello User...! Welcome to Financial Calculators Page");
    console.log(res);
});

app.get("/calculators/sip-calculator" , (req,res)=>{
    res.send("Hello User...!  Welcome SIP Calculator Page");
    console.log(res);
});

app.get("/calculators/lumpsum-calculator" , (req,res)=>{
    res.send("Hello User...!  Welcome Lumsum Calculator Page");
    console.log(res);
});

app.get("/calculators/goal-planing-lumpsum" , (req,res)=>{
    res.send("Hello User...!  Welcome Goal Planing - Lumpsum Page");
    console.log(res);
});

app.get("/calculators/goal-planing-sip" , (req,res)=>{
    res.send("Hello User...!  Welcome Goal Planing - SIP Page");
    console.log(res);
});

app.get("/calculators/emi-calculator" , (req,res)=>{
    res.send("Hello User...!  Welcome EMI Calculator Page");
    console.log(res);
});

app.get("/calculators/compound-interest-calculator" , (req,res)=>{
    res.send("Hello User...!  Welcome Compound Interest Calculator Page");
    console.log(res);
});

app.get("/calculators/investment-planner" , (req,res)=>{
    res.send("Hello User...!  Welcome Interestment Planner Page");
    console.log(res);
});

app.get("/calculators/stockmarket-vs-fd-returnsr" , (req,res)=>{
    res.send("Hello User...!  Welcome Stock Market vs FD Returns Page");
    console.log(res);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });