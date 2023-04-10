import  jwt from "jsonwebtoken";
import Movie from "../model/movie.js";
import mongoose from "mongoose";
import admin from "../model/admin.js";

export const addmovie=async(req,res)=>{
    // before we allow admin to  add movie
    // first verift token
    // we will get the token in the header after we login
    const extractedtoken = req.headers.authorization?.split(' ')[1];
   //to split the bearer fronm the token
    if(!extractedtoken&&extractedtoken.trim()===""){
        return res.status(404).json({message:'no token found'})
    }
    
   // console.log(extractedtoken)
   //now we need to extract admin id from the token and decode it 
   let adminid;
   //verify token
   
       jwt.verify(extractedtoken,process.env.secret_key,(err,decrypt)=>{
        if(err){
            return res.status(400).json({message:`${err.message}`})
                }
        else{
            adminid=decrypt.id; 
            return;
                        
                }
       }
       );
      // return res.status(200).json({adminid})


   //create new movie
   // does the schema and here when destructure and also when we pass date should be the same???????
   // ke sschema gar temesasay mehon alebet if we make spilling error it willnot work
   const{title,description,releasedate,posterurl,featured,actors}=req.body;

   if(!title&&title.trim()===''&&!description&&description.trim()===""&&!posterurl&&posterurl.trim()===""){
    return res.status(422).json({message:'invalid input'});
}
let movie;
try {
    
    movie=new Movie({
        //schema attribute gar temesasay mehonalebet
        title,
        // we can also as title:title, the first from schema the second from request body
        description,
        releasedate:new Date(`${releasedate}`),
        featured,
        actors,
        admin:adminid,
        posterurl
 
    })
    const session=await mongoose.startSession()
    const adminuser=await admin.findById(adminid)
    session.startTransaction()
    await movie.save({session});
    adminuser.addmovies.push(movie)
    await adminuser.save({session})
    await session.commitTransaction()
    




   
} catch (error) {
    return console.log(error)
}
if(!movie){
    return res.status(500).json({message:"request failed"})
}
return res.status(200).json({message:movie})

}

// no need to verify to see all movie
export const getmovie=async(req,res)=>{
    let movie;
    try {
        movie=await Movie.find();
    } catch (error) {
        return  console.log(error)
    }
    if(!movie){
        return res.status(500).json({message:'request failed'})
    }
    return res.status(200).json({movie})
}


export const getmoviebyid=async(req,res)=>{
    const {id}=req.params.id;
    let movie
    try {
        movie=await Movie.findById(id);

    } catch (error) {
        return console.log(error);
    }
    if(!movie){
        return res.status(404).json({message:"invalid movie id"})
    }
    return res.status(200).json({movie})

}
