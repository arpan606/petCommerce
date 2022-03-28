const router=require("express").Router();
const User=require("../models/User.js");


//Register
router.post("/register",async function(req,res){

    try{
     //check user
      const check=await User.findOne({email:req.body.email});

      if(check)
      {
        res.status(200).json({
          message:"Email already Registered",
          status:false
        });
      }else{
       // create new User
       const newUser=new User({username:req.body.username,  email:req.body.email, password:req.body.password});
       console.log(newUser);
       // save user and send response

       const user= await newUser.save();
       res.status(200).json({
         userId:user._id,
         message:"Registered",
         status:true
       });
      }
    }catch(err)
    {
      res.status(500).json(err);
    }
});


router.post("/login",async function(req,res){

  try{
  //find user
   const user=await User.findOne({email:req.body.email});

   if(!user)
   {
     res.status(400).json({
       message:" Email not registered",
       status:false
     });

     console.log("user not found");
    }else if(user)
    {
      console.log("userfound");
    //validate password

     if(req.body.password===user.password)
     {  console.log("valid password");
        res.status(200).json({
          message:"Userfound",
          status:true,
          userId:user._id
        });

     }else
     {
        console.log("valid not password");
          res.status(400).json({
            message:"Invalid Email or Password",
            status:false
          });
     }
  }


  }catch(err)
  {
    res.status(500).json(err);
  }


});


module.exports=router;
