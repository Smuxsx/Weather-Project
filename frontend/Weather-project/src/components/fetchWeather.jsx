import React from 'react'

async function fetchWeather(setDataString, setError, setLoading){
    try{
        const response = await fetch('http://localhost:4000/weather');
        const data = await response.json();
        setDataString(data);
        localStorage.setItem('weatherData', data);
    } catch (error){
        setError(error);
    } finally {
        setLoading(false);
    }
}

export default fetchWeather;