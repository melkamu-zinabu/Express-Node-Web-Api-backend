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
    addmoviews:[{
       type:String,

    },],
})
export default mongoose.model("Admin",adminschema);
