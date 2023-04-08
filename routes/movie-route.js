import Express from "express";
import { addmovie } from "../controller/movie-contoller.js";
const movierouter=Express.Router();
movierouter.post('/',addmovie)
export default movierouter;