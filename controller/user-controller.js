import User from "../model/User.js";
import bcrypt from "bcryptjs";
export const getalluser=async(req,res,next)=>{
    let users;
    try{console.log("hi");
        //connect mongodb here
        users= await User.find();
    }
    catch(err){
        return next();// retuns to the next availeble middleware
    }

    if(!users){
        return res.status(500).json({
            message:'unexpected error occurred'
        })
    }

    return res.status(200).json({users});

}



export const signup=async(req,res,next)=>{
    const{name,email,password}=req.body;
    // we need to decrpt password tpps tore in the database
    if(!name&&name.trim()===''&&!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    // we have to salt it
    const newpassword=bcrypt.hashSync(password, 10);
   let user;
   try{
    user=new User({
        name,email,password:newpassword
    })
    user =await user.save();
   }
   catch(err){
    //return next(err);
    console.log(err);
   }
   if(!user){
    return res.status(500).json({message:'unexpected error'})
   }
   return  res.status(201).json({user})

}


export const updateuser=async(req,res,next)=>{
   //params are object 
    const id=req.params.id;
    const{name,email,password}=req.body;
    // we need to decrpt password tpps tore in the database
    if(!name&&name.trim()===''&&!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    const newpassword=bcrypt.hashSync(password);

    let user;
    try {
        user =await User.findByIdAndUpdate(id,{name,email,password:newpassword});

        
    } catch (error) {
        console.log('err');
    }
    if(!user){
        return res.status(500).json({message:"no data with this id"})
    }
    return res.status(200).json({
        message:"hi update success"
    })

}

export const deleteuser=async(req,res,next)=>{
    const id=req.params.id;
    let user;
   try {
    user=await User.findByIdAndRemove(id);
    
   } catch (error) {
     console.log('err');
   }
   if(!user){
    return res.status(500).json({message:"no data with this id"})
}
return res.status(200).json({
    message:"hi deleted success"
})
}

export const login = async(req,res) => {
    const{email,password}=req.body;
    // we need to decrpt password tpps tore in the database
    if(!email&&email.trim()===''&!password&&password.trim()===''){
        return res.status(422).json({message:'invalid input'});
    }
    let existinuser;

   try {
    existinuser=await User.findOne({email})
   } catch (error) {
    console.log('err');
   }
   if(!existinuser){
    return res.status(404).json({message:"unable to find the user"})
   }
 
   const ispasswordcorrect=bcrypt.compareSync(password,existinuser.password);
   console.log(ispasswordcorrect)
   if(!ispasswordcorrect){
    return res.status(400).json({message:"password incorrect"})
   }
   return res.status(200).json({message:existinuser})
  
}



// export const getalluser = async(req,res) => {
//     try {
//         const user = await User.find()
//         if(user.length > 0){
//             return res.status(200).json(user)
//         }
//         return res.status(404).json({
//             message : "Users Not Found"
//         })
//     } catch (error) {
//         return res.status(500).json({
//             message : error.message
//         })
//     }
// }