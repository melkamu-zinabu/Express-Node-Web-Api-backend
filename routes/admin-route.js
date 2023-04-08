import Express from "express";
const adminrouter=Express.Router();
import { addadmin, adminlogin } from "../controller/admin-controller.js";
 adminrouter.post('/signup',addadmin)
 adminrouter.post('/login',adminlogin)
 export default adminrouter;

