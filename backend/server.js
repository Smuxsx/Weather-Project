import express from 'express';
import axios from 'axios';
import env from "dotenv"
import cors from "cors"
import moment from 'moment';
import queryString from "query-string";
import bodyParser from 'body-parser';
  

const app = express();
env.config();
const port = process.env.PORTSERVER;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const getTimelineURL = process.env.APIURL;
const apikey = process.env.APIKEY;


let location = [51.5072, 0.1276];
// let IsLocated = false

// if(IsLocated){
//     // Pass
// } else {
//     location = [51.5072, 0.1276]
// }

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
const startTime = moment.utc(now).add(0, "minutes").toISOString();
//Creates another moment object for the next 6 from the current time and converts it into an ISO 8061 String(standardized way of representing date an time)
const endTime = moment.utc(now).add(4, "days").toISOString()

const timeZone = "UCT";

const getTimelineParameters =  queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timeZone,
}, {arrayFormat: "comma"});


app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(getTimelineURL + "?" + getTimelineParameters);
        res.json(response.data);
    } catch (error) {
        console.log(getTimelineParameters);
        console.error('Failed to make request:', error.message);
        res.status(500).send('Failed to fetch activity.');
    }
});

app.post("/postData", async (req, res) => {
    const data = req.body.CityName;    
    try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${data}&key=${process.env.APIGEOCODE}`);
        let lat = response.data.results[0].geometry.lat;
        let lng = response.data.results[0].geometry.lng;
        console.log(lat);
        console.log(lng);
        const Updatedlocation = [lat, lng];
        console.log(Updatedlocation);

        const getUpdatedTimelineParameters =  queryString.stringify({
            apikey,
            location: Updatedlocation,
            fields,
            units,
            timesteps,
            startTime,
            endTime,
            timeZone,
        }, {arrayFormat: "comma"});
        
        const weatherResponse = await axios.get(getTimelineURL + "?" + getUpdatedTimelineParameters);
        res.json(weatherResponse.data);
   } catch (error) {
        console.error('Failed to make request:', error.message);
        res.status(500).send('Falied to fetch activity.');
    }
})

app.get("/test", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})