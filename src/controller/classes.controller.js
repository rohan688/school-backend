const express =require("express");
const router =express.Router();
const Classes=require("../model/classes.model");
 
router.get("",async (req,res)=>{
    try{
     const classes= await Classes.find().populate("teachers_id").lean().exec();
     res.status(200).send(classes)
    }
    catch(er){
      res.status(400).send(er.message)
    }
})
router.post("",async (req,res)=>{
    try{
     const classes= await Classes.create(req.body);
     res.status(200).send(classes);
    }
    catch(er){
      res.status(400).send(er.message)
    }
})
router.get("/:id",async (req,res)=>{
    try{
     const classes= await Classes.findById(req.params.id).populate("teachers_id").lean().exec();
     res.status(200).send(classes)
    }
    catch(er){
      res.status(500).send(er.message)
    }
})
module.exports=router