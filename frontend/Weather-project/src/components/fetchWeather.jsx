import React from 'react'

async function fetchWeather(setDataString, setError, setLoading){
    try{
        const response = await fetch('http://localhost:4000/weather');
        const data = await response.json();
        const timestamp = new Date().getTime();
        setDataString(data);
        localStorage.setItem('weatherData', JSON.stringify(data));
        localStorage.setItem('weatherDataTimeStamp', timestamp)
    } catch (error){
        setError(error);
    } finally {
        setLoading(false);
    }
}

export default fetchWeather;