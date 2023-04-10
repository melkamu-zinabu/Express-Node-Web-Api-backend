import Express  from "express";
import { deletebooking, getbookingbyid } from "../controller/booking-controller";
const bookingroute=Express.Router()
bookingroute.post('/:id',newbooking)
bookingroute.get('/',getbookingbyid)
bookingroute.delete('/:id',deletebooking)
export default bookingroute