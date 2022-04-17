require("dotenv").config();
const jwt = require("jsonwebtoken")
const User=require("../model/admin.model");

const newToken=(user)=>{
console.log(process.env)
  return  jwt.sign({ user },process.env.JWT_SECRET_KEY);
}

const register=async (req,res)=>{
 try{
    let user =await User.findOne({email:req.body.email}).lean().exec();

    if(user)
    return res.status(400).send({message:"Please try another email"});

    user=await User.create(req.body);
    

    const token=newToken(user)
     res.send({user, token});
 }
 catch(err){
     res.status(500).send(err.message);
 }
};


const login=async (req,res)=>{
    try{
      const user = await  User.findOne({email:req.body.email});

      if(!user)
      return res.status(400).send({message:"Please Try Another Email Or Password"})
     
      const match= user.checkPassword(req.body.password);

      if(!match)
      return res.status(400).send({message:"Please Try Another Email Or Password"})

      const token=newToken(user)
      res.send("login succeful");
      }
    catch{
        res.status(500).send(err.message);
    }
   };
   module.exports ={register , login}