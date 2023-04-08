import Express  from "express";
import { deleteuser, getalluser, login, signup, updateuser } from "../controller/user-controller.js";

const router=Express.Router();
router.get('/',getalluser);
 router.post('/signup',signup)
 router.put("/:id",updateuser)
 router.delete('/:id',deleteuser);
 router.post('/login',login);

export default router;
