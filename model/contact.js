import mongoose from "mongoose";
const schema=mongoose.Schema
const contactschema=new schema({
    phonenumber:{
        type:Date,
        required:true
    }

})

export default mongoose.model('Contact',contactschema)