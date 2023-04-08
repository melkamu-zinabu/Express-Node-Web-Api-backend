import admin from "../model/admin.js";
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export const addadmin=async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    let exstingadmin;
    try {
        exstingadmin=await admin.findOne({email});

    } catch (error) {
        return console.log(error);
    }
    if(exstingadmin){
        return res.status(400).json({message:"admin already exist"})

    }
    let Admin;
    const newpassword=bcrypt.hashSync(password,10)
    try {
        Admin=new admin({
            email,password:newpassword
        })
        Admin=await Admin.save();
    } catch (error) {
        return console.log(error)
    }
    if(!Admin){
        return res.status(500).json({message:'message is unble to store'})
    }
    return res.status(200).json({Admin});
  
};

export const adminlogin=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    let   existingadmin
    try {
        existingadmin=await admin.findOne({email})
   
        
    } catch (error) {
        return console.log(error);
    }
    if(!existingadmin){
        return res.status(404).json({message:'admin not found'})
    }
    const ispasswordcorrect=bcrypt.compareSync(password,existingadmin.password)
    if(!ispasswordcorrect){
        return res.status(400).json({message:'incorrect pw'})
    }
    // when admin login we just need to create token to authorise the admin to create movies
    
   
    const token=Jwt.sign({id:existingadmin._id},process.env.secret_key,{expiresIn:'7d'})
    return res.status(200).json({message:'authentication complete',token,id:existingadmin._id})
   // const token=Jwt.sign({id:existingadmin._id,process.env.secret_key})
}