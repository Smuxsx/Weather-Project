import React, {useState, useEffect} from 'react'
import getCurrentLocation from './getLocation';
import WeatherContent from './WeatherContent';
import CityName from './CityName';
import fetchWeather from './fetchWeather';

function WeatherArea(){
    const [dataString, setDataString] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // getCurrentLocation()
    //     .then(({latitude, longitude}) => {
    //         console.log(latitude + " " + longitude)
    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })

    useEffect(() => {
        const storedData = localStorage.getItem("weatherData");
        const storedTimeStamp = localStorage.getItem("weatherDataTimeStamp")
        const now = new Date().getTime();

        const expiryTime = 60 * 60 * 1000; // 1 Hour
        
        if (storedData != null && storedTimeStamp && now - storedTimeStamp < expiryTime){
            setDataString(JSON.parse(storedData));
            setLoading(false)
        } else {
            fetchWeather(setDataString, setError, setLoading);
        }
    }, []);



    if (loading) return <div className="lds-facebook"><div></div><div></div><div></div></div>
    if (error) return <div>{error.message}</div>

    return <div>
        <CityName />
        <WeatherContent
         temperature={dataString.data.timelines[1].intervals[0].values.temperature} 
         cloudCover={dataString.data.timelines[1].intervals[0].values.cloudCover} 
         precipitationProbability={dataString.data.timelines[1].intervals[0].values.precipitationProbability} 
         windGust={dataString.data.timelines[1].intervals[0].values.windGust} 
         windSpeed={dataString.data.timelines[1].intervals[0].values.windSpeed}/>
    </div>
}

export default WeatherArea;