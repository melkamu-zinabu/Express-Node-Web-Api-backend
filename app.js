import  express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import  CONNECTDB  from "./config/db.js";
import userrouter from "./routes/user-routes.js";
dotenv.config();

const app=express();
app.use(express.json());
// we are telling this application will use only json to communicate

CONNECTDB();
const port=3000;
//here is the middleware
app.use('/user', userrouter)
app.listen(port,MEL);

function MEL(){
    
        console.log(`bro running ${port}`);
}

