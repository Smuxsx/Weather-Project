import React, { useState, useEffect, useContext } from 'react';
import fetchWeather from './fetchWeather';
import { MyContext } from './MyContext';

function useWeatherData() {
    const [dataString, setDataString] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { updatedData } = useContext(MyContext);

    useEffect(() => {
        const storedDataString = localStorage.getItem("weatherData");
        const storedTimeStamp = localStorage.getItem("weatherDataTimeStamp");
        const now = new Date().getTime();
        const expiryTime = 60 * 60 * 1000; // 1 Hour

        const storedData = storedDataString ? JSON.parse(storedDataString) : null;

        if (storedData && storedTimeStamp && now - storedTimeStamp < expiryTime && JSON.stringify(storedData) === JSON.stringify(updatedData)) {
            setDataString(storedData);
            setLoading(false);
        } else if (updatedData && JSON.stringify(storedData) !== JSON.stringify(updatedData)) {
            setDataString(updatedData);
            setLoading(false);
        } else {
            fetchWeather(setDataString, setError, setLoading);
        }
    }, [updatedData]);

    return { dataString, loading, error};
}

export default useWeatherData;
