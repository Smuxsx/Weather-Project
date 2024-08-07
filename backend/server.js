import express from 'express';
import axios from 'axios';
import env from "dotenv"
import cors from "cors"

const app = express();
env.config()
const port = process.env.PORTSERVER;
app.use(cors());

const getTimelineURL = "https://api.tomorrow.io/v4/timelines"
const apiKey = "dkclAagD70e5HeCECrzh98dNP3OLoEng"

function getCurrentLocation(){
    return new Promise((resolve, reject) => {
        if(!navigator.geolocation){
            reject(new Error('Geolocation is not supported by your browser'))
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    resolve({latitude, longitude})
                },
                (error) => reject(error),
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            )
        }
    })
}

app.get("/test", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})