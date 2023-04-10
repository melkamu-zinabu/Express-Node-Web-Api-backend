import Express from "express";
import { addmovie, getmovie, getmoviebyid } from "../controller/movie-contoller.js";
const movierouter=Express.Router();
movierouter.get('/',getmovie)
movierouter.post('/',addmovie)
movierouter.get('/:id',getmoviebyid)
export default movierouter;