import mongoose from "mongoose";
const schema=mongoose.Schema
const bookingschema=new schema({
    movie:{
        type:mongoose.Types.ObjectId,
        ref:"Movie",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    seatnumber:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }

})

export default mongoose.model('Booking',bookingschema)