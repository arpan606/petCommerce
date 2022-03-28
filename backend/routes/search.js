const router=require("express").Router();
const Dogs=require("../models/dogs.js");

router.post("/",async function(req,res){

  const searchField=req.body.search;

  try{
  const regex=new RegExp(req.body.search,'i');
  Dogs.find({name:regex})
    .then((data)=>{
        res.status(200).json(data);
    });

  }catch(err)
  {
    console.log(err);
  }


});


module.exports=router;
