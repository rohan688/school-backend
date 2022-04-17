const mongoose =require("mongoose");

const connect = () =>{
    return mongoose.connect('mongodb+srv://rohan123:rohan45@cluster0.pir6p.mongodb.net/School-management')
}
module.exports=connect