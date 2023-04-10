import mongoose from "mongoose";
const schema= mongoose.Schema;
const movieschema=new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    releasedate:{
        type:Date,
        required:false
    },
    posterurl:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,

    },
    booking:[{
       type:mongoose.Types.ObjectId,
       ref:"Booking" 
    }],
    admin:{
        type:mongoose.Types.ObjectId,
        ref:'Admin',
        required:true
    },
    actors:[
        {type:String,required:true}]



});
export default mongoose.model('Movie',movieschema)