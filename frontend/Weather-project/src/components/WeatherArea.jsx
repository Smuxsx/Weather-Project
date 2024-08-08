import React, {useState, useEffect} from 'react'
import getCurrentLocation from './getLocation';
import WeatherContent from './WeatherContent';

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
        fetch('http://localhost:4000/weather')
        .then(response => {
            if (!response.ok){
            throw new Error('Network response was not ok')
        }
            return response.json();
        })
        .then(data => {
            setDataString(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [])

    const { cloudCover, precipitationProbability, temperature, windGust, windSpeed} = dataString.data.timelines[1].intervals[0].values;


    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    
    return <div>
        <WeatherContent
         temperature={temperature} 
         cloudCover={cloudCover} 
         precipitationProbability={precipitationProbability} 
         windGust={windGust} 
         windSpeed={windSpeed}/>
    </div>
}

export default WeatherArea;