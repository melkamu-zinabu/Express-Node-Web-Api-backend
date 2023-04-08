const { default: mongoose } = require("mongoose");

const schema=new mongoose.Schema;
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
        required:true
    },
    posterurl:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,

    },
    booking:[{
       type:String 
    }],
    admin:{
        type:String,
        required:true
    },
    actors:[
        {type:String,required:true}]



})
export default mongoose.model('movie',movieschema)