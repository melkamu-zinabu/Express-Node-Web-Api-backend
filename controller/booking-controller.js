import mongoose, { startSession } from "mongoose";
import Booking from "../model/booking.js";
import Movie from '../model/movie.js'
import User from '../model/User.js'
export const newbooking=async(req,res)=>{
    const{movie,date,seatnumber,user}=req.body
    let existingmovie;
    let existinguser;
    try {
        existingmovie=await Movie.findById(movie)
        existinguser=await User.findById(user)
    } catch (error) {
        return console.log(error)
    }
    if(!existingmovie){
        return res.status(404).json({message:"movie not found with this id"})
    }
    if(!existinguser){
        return res.status(404).json({message:"use rnot found with this id"})
    }


    let Newbooking;
    try {
        Newbooking=new Booking({
            movie,date:new Date(`${date}`),seatnumber,user
        })
    const session=await mongoose.startSession()
    await session.startTransaction();
    await existinguser.booking.push(Newbooking)
    await existingmovie.booking.push(Newbooking)
    await existinguser.save({session})
    await existingmovie.save({session})
    await Newbooking.save(session);
    await session.commitTransaction()
    
    } catch (error) {
        return console.log(error)
    }
    if(!Newbooking){
        return  res.status(500).json({message:"unable to create booking"})
    }
    console.log(Newbooking)
    return  res.status(201).json({message:Newbooking})


}

export const getbookingbyid=async(req,res)=>{
    const id=req.params.id;
    let booking
    try {
        booking=await Booking.findById(id);
    
    } catch (error) {
        return console.log(error);

    }
    if(!booking){
        return res.status(500).json({message:"not found with id"})
    }
    return res.status(200).json({message:booking})
 
}

export const deletebooking=async(req,res)=>{
    const id=req.params.id
    let booking
    try {
        booking=await Booking.findByIdAndRemove(id).populate("user movie")
        const session=await mongoose.startSession()
        session.startTransaction()
        await booking.user.Booking.pull(booking)
        await booking.movie.Booking.pull(booking)
        await booking.movie.save(session);
        await booking.user.save(session);
        session.commitTransaction();
        
    } catch (error) {
        console.log(error)
    }

}

