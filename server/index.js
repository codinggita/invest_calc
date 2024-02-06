const express = require("express");
const app = express();
const port = 3000;

// const data = {
        
//         user :{
//             id : 1,
//             username: "user1",
//             age: 25,
//             calculators : [
//                 {
//                   "calculator": "SIP_Calculator",
//                     "principle": 5000,
//                     "rate": 10,
//                     "time": 5,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "Lumpsum_Calculator",
//                     "principle": 10000,
//                     "rate": 8,
//                     "time": 10,
//                     "inflation_type": "lumpsum"
//                   },
//                   {
//                   "calculator": "Goal_Planning_Lumpsum",
//                     "principle": 25000,
//                     "rate": 12,
//                     "time": 15,
//                     "inflation_type": "lumpsum"
//                   },
//                   {
//                   "calculator": "Goal_Planning_SIP",
//                     "principle": 5000,
//                     "rate": 8,
//                     "time": 20,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "Time_Duration_OneTime_Investment",
//                     "principle": 20000,
//                     "rate": 7,
//                     "time": 8,
//                     "inflation_type": "lumpsum"
//                   },
//                   {
//                   "calculator": "Time_Duration_Regular_Investment",
//                     "principle": 5000,
//                     "rate": 10,
//                     "time": 12,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "Retirement_Planning",
//                     "principle": 50000,
//                     "rate": 8,
//                     "time": 25,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "Investment_Planner",
//                     "principle": 30000,
//                     "rate": 9,
//                     "time": 15,
//                     "inflation_type": "lumpsum"
//                   },
//                   {
//                   "calculator": "StockMarket_vs_FD_Returns",
//                     "principle_stock": 40000,
//                     "rate_stock": 12,
//                     "time_stock": 10,
//                     "principle_fd": 50000,
//                     "rate_fd": 6,
//                     "time_fd": 15
//                   },
//                   {
//                   "calculator": "Children_Education_Planner",
//                     "principle": 20000,
//                     "rate": 8,
//                     "time": 18,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "EMI_Education_Loan_Calculator",
//                     "loan_amount": 50000,
//                     "interest_rate": 5,
//                     "loan_tenure": 3
//                   },
//                   {
//                   "calculator": "EMI_Calculator",
//                     "loan_amount": 100000,
//                     "interest_rate": 8,
//                     "loan_tenure": 5
//                   },
//                   {
//                   "calculator": "PPF_Calculator",
//                     "principle": 15000,
//                     "rate": 7,
//                     "time": 15,
//                     "inflation_type": "sip"
//                   },
//                   {
//                   "calculator": "Compound_Interest_Calculator",
//                     "principle": 10000,
//                     "rate": 6,
//                     "time": 5,
//                     "compounds_per_year": 4
//                   },
//                   {
//                   "calculator": "CAGR_Calculator",
//                     "initial_value": 50000,
//                     "final_value": 80000,
//                     "years": 7
//                   }
//                 ]
//         }
            
        
//   };
const mongoose = require("mongoose");

const uri = "mongodb+srv://tauqueeralam42:vKn9ZUQ7F6DjObG1@cluster0.r1jgh6y.mongodb.net/"; 
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

// Define a schema
const Schema = mongoose.Schema;
const UserProfileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  interests: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

// // Examples of valid documents based on this schema:
const user1 = new UserProfile({
  username: "user1",
  email: "user1@example.com",
  dateOfBirth: new Date(1990, 6, 20),
  interests: ["coding", "hiking"],
});

const user2 = new UserProfile({
  username: "user2",
  email: "user2@example.com",
  dateOfBirth: new Date(1985, 2, 15),
  interests: ["photography", "traveling"],
});

const user3 = new UserProfile({
  username: "user3",
  email: "user3@example.com",
  dateOfBirth: new Date(1985, 2, 15),
  interests: ["photography", "traveling"],
});
user3.save();

// Add user1 and user2 to the database
const addUsersToDB = async () => {
  try {
    await user1.save();
    console.log("User 1 added successfully!");
    await user2.save();
    console.log("User 2 added successfully!");
    await user3.save();
    console.log("User 3 added successfully!");
  } catch (error) {
    console.error("Error adding users:", error);
  }
};
addUsersToDB();



app.get("/", (req,res)=>{
    res.send("Hello User...! Welcome to My Website Invest Calc Home Page");
    console.log(res);
});

app.get("/:username/:id", (req,res) => {
   let { username, id } = req.params;
   res.send(`Welcome to my page of @${username}!`);
    
});

app.get("/search" , (req,res) =>{
    let {q} = req.query;
    if(!q){
        res.send("Nothing Searched");
    }
    res.send(`Search result for query : ${q}`);
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

app.post("/:username/:id", (req,res) => {
    let { username, id } = req.params;
    res.send(`Welcome to my page of @${username}!`);
     
 });
 
 app.post("/search" , (req,res) =>{
     let {q} = req.query;
     if(!q){
         res.send("Nothing Searched");
     }
     res.send(`Search result for query : ${q}`);
 });
 
 app.post("/calculators", (req,res)=>{
     res.send("Hello User...! Welcome to Financial Calculators Page");
     console.log(res);
 });
 
 app.post("/calculators/sip-calculator" , (req,res)=>{
     res.send("Hello User...!  Welcome SIP Calculator Page");
     console.log(res);
 });
 
 app.post("/calculators/lumpsum-calculator" , (req,res)=>{
     res.send("Hello User...!  Welcome Lumsum Calculator Page");
     console.log(res);
 });
 
 app.post("/calculators/goal-planing-lumpsum" , (req,res)=>{
     res.send("Hello User...!  Welcome Goal Planing - Lumpsum Page");
     console.log(res);
 });
 
 app.post("/calculators/goal-planing-sip" , (req,res)=>{
     res.send("Hello User...!  Welcome Goal Planing - SIP Page");
     console.log(res);
 });
 
 app.post("/calculators/emi-calculator" , (req,res)=>{
     res.send("Hello User...!  Welcome EMI Calculator Page");
     console.log(res);
 });
 
 app.post("/calculators/compound-interest-calculator" , (req,res)=>{
     res.send("Hello User...!  Welcome Compound Interest Calculator Page");
     console.log(res);
 });
 
 app.post("/calculators/investment-planner" , (req,res)=>{
     res.send("Hello User...!  Welcome Interestment Planner Page");
     console.log(res);
 });
 
 app.post("/calculators/stockmarket-vs-fd-returnsr" , (req,res)=>{
     res.send("Hello User...!  Welcome Stock Market vs FD Returns Page");
     console.log(res);
 });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });