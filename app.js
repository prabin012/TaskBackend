import express from "express";
import database from "./DB/dbConnect.js";
import cors from 'cors'
import userRote from './routes/rotues.js'
import bodyParser from "body-parser";
const app = express();
import dotenv from 'dotenv';

dotenv.config();
database();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/api',userRote);

const PORT = process.env.PORT || 7550;
app.listen(PORT,()=>{
    console.log("serer is running", PORT)
})