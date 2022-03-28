const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const userRoute=require("./routes/user");
const searchRoute=require("./routes/search");
const dogRoute=require("./routes/dogs");
const User=require("./models/User.js");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/petCommerce",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongod db connected"))
.catch((err)=>console.log(err));


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
   next();
});

app.use("/user",userRoute);
app.use("/dog",dogRoute);
app.use("/search",searchRoute);



app.listen(8000,function(req,res){
  console.log("server started 8000");
});
