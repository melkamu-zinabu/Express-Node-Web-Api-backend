import User from "../model/User";

export const getalluser=async(req,res,next)=>{
    let users;
    try{
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


