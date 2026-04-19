import express from 'express';
import dotenv from 'dotenv';
import pool from "../src/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.get('/api/ping', (req, res) =>{
//     res.json({message: "Backend lives"})
// });

app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
});

