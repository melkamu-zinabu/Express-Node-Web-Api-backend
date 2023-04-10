import express  from "express"
import mongoose from "mongoose"
const schema= mongoose.Schema;
const adminschema=new schema({
    password:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        Unique:true
    },
    addmovies:[{
       type:mongoose.Types.ObjectId,
       ref:'Movie'

    },],
})
export default mongoose.model("Admin",adminschema);
