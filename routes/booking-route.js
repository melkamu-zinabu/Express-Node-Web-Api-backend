import Express  from "express";
import { getbookingbyid } from "../controller/booking-controller";
const bookingroute=Express.Router()
bookingroute.post('/:id',newbooking)
bookingroute.get('/',getbookingbyid)
bookingroute.delete('/:id')
export default bookingroute