import Express from "express";
const adminrouter=Express.Router();
import { addadmin, adminlogin, getadmin } from "../controller/admin-controller.js";
 adminrouter.post('/signup',addadmin)
 adminrouter.post('/login',adminlogin)
 adminrouter.get('/',getadmin)
 export default adminrouter;

