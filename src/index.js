const express  = require('express');
const app =express();
const connect=require("./config/db");
const cors =require("cors");
const teacherController=require("./controller/teachers.controllers")
const classesConroller=require("./controller/classes.controller")
const {register ,login} =require("./controller/admin.controller")

// app.use(cors);
app.use(express.json())
app.use("/teachers",teacherController)
app.use("/classes",classesConroller)
app.post("/register",register);
app.post("/login",login);

app.listen(2000,async()=>{
    try{
     await connect();
     console.log("Server is Running on port 2000")
    }
    catch(err){
     console.log(err.message)
    }
})