import express from 'express';
import axios from 'axios';
import env from "dotenv"
import cors from "cors"

const app = express();
env.config()
const port = process.env.PORTSERVER;
app.use(cors());


app.get("/test", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})