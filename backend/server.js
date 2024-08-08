import express from 'express';
import axios from 'axios';
import env from "dotenv"
import cors from "cors"
import moment from 'moment';
import queryString from "query-string"

const app = express();
env.config();
const port = process.env.PORTSERVER;
app.use(cors());

const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
const apiKey = "dkclAagD70e5HeCECrzh98dNP3OLoEng";

let location = [51.5072, 0.1276];

const fields = [
    "temperature",
    "windGust",
    "windSpeed",
    "precipitationProbability",
    "cloudCover"
]

const units = "metric";

const timesteps = ["current", "1d"];

//Creates a moment object representing the current time in UTC
const now = moment.utc();
//Creates a new moment ojbect based on the current time in UTC and adds zero minuts which is equal to the current time
const starTime = moment.utc(now).add(0, "minutes").toISOString();
//Creates another moment object for the next 6 from the current time and converts it into an ISO 8061 String(standardized way of representing date an time)
const endTime = moment.utc(now).add(6, "days").toISOString()

const timeZone = "Europe/London"

app.get("/test", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})