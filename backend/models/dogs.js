const mongoose=require("mongoose");

const DogsSchema =new mongoose.Schema({
      name:{
       type:String,
       require:true,
     },
     location:{
       type:String,
       require:true,
     },
     weight:{
       type:String,
       required:true,
     },
     breed:{
      type:String,
      require:true,
    },
    age:{
      type:String,
      require:true,
    },
    amount:{
      type:Number,
      required:true,
    },

   },
   {
     timestamps:true
   }
 );


module.exports =mongoose.model("Dogs",DogsSchema);
