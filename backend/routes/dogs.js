const router=require("express").Router();
const Dogs=require("../models/dogs.js");


router.post("/",async function(req,res){

    try{
       const newDog=new Dogs({
          name:req.body.name,
          location:req.body.location,
          weight:req.body.weight,
          breed:req.body.breed,
          age:req.body.age,
          amount:req.body.amount
       });
       console.log(newDog);
       // save user and send response
       const dogs= await newDog.save();
       res.status(200).json(dogs);

      }catch(err)
     {
      res.status(500).json(err);
     }
});

router.post("/getdogs",async function(req,res){

  try{
       const dogs= await Dogs.find();
       res.status(200).json(dogs);

  }catch(err)
  {
    res.status(500).json(err);
  }


});

module.exports=router;
