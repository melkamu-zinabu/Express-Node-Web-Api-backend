import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userschema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
      //  required:true,
        minlength:6,
    },
    photo: {
        data: Buffer,
        contentType: String
      }
    ,
    booking:[{
        type:mongoose.Types.ObjectId,
        ref:"Booking"
    }]
})
export default mongoose.model('User',userschema);