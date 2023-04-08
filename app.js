import  express from "express";
import dotenv from 'dotenv'
import  CONNECTDB  from "./config/db.js";
import userrouter from "./routes/user-routes.js";
import adminrouter from './routes/admin-route.js'
import movierouter from "./routes/movie-route.js";


dotenv.config();

const app=express();
app.use(express.json());
// we are telling this application will use only json to communicate

CONNECTDB();
const port=3000;
//here is the middleware
app.use('/user', userrouter)
app.use('/admin', adminrouter)
app.use('/movie', movierouter)


app.listen(port,MEL);

function MEL(){
    
        console.log(`bro running ${port}`);
}

