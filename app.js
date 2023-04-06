import  Express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import  CONNECTDB  from "./config/db.js";
import userrouter from "./routes/user-routes.js";
dotenv.config();

const app=Express();
CONNECTDB();
app.use("/user",userrouter)
app.listen(5000,MEL);

function MEL(){
    
        console.log('bro running');
    
}

