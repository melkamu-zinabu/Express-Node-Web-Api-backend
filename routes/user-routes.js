import Express  from "express";
import getalluser  from "../controller/user-controller";
const userrouter=Express.Router();
userrouter.get('/',getalluser);
export default userrouter;

