import  jwt from "jsonwebtoken";
export const addmovie=async(req,res)=>{
    //before we allow admin to  add movie
    // first verift token
    // we will get the token in the header after we login
    const extractedtoken=req.headers.authorization.split("")[1];//to split the bearer fronm the token
    if(!extractedtoken&&extractedtoken.trim==""){
        return res.status(404).json({message:'no token found'})
    }
   // console.log(extractedtoken)
   //now we need to extract admin id from the token and decode it 
   let adminid;
   //verify token
   jwt.verify(extractedtoken,process.env.secret_key,(error,decrypted)=>{
    if(error){
        return res.status(400).json({message:"${error.message"})
    }
    else{
       adminid=decrypted.id; 
       return;
    }
   })
   //create new movie
   const{title,description,releasedate,posterurl,feature,actors}=req.body;
   if(!title&&title.trim()===''&&!description&&description.trim()===''&!releasedate&&releasedate.trim()===''){
    return res.status(422).json({message:'invalid input'});
}
let movie;
try {
    movie=new movie({
        title,
        actors,
        description,
        releasedate:new Date('${releasedDate')
        ,feature,admin:adminid
    })
    movie=await movie.save();
} catch (error) {
    return console.log(error)
}
if(!movie){
    return res.status(500).json({message:"request failed"})
}
return res.status(200).json({message:movie})





}