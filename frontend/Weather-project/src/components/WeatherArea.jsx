import React, {useState, useEffect, useCallback, useContext} from 'react'
import WeatherTemperature from './WeatherTemperature';
import CityName from './CityName';
import WeatherTempDays from './WeatherTempDays';
import PrepWind from './PrepWind';
import useWeatherData from './useWeatherData';
import { MyLoadingContext } from './UpdatedLoadingContext';

function WeatherArea(){
    const { dataString, loading, error } = useWeatherData();
    const { updatedLoading } = useContext( MyLoadingContext )

    if (updatedLoading) return <div className='loading'><div className="lds-facebook"><div></div><div></div><div></div></div></div>
    if (loading) return <div className='loading'><div className="lds-facebook"><div></div><div></div><div></div></div></div>
    if (error) return <div>{error.message}</div>


    return <div>
        <CityName />
        <WeatherTemperature
         temperature={dataString.data.timelines[1].intervals[0].values.temperature} />
        <WeatherTempDays
         temp0={dataString.data.timelines[0].intervals[0].values.temperature}
         temp1={dataString.data.timelines[0].intervals[1].values.temperature}
         temp2={dataString.data.timelines[0].intervals[2].values.temperature}
         temp3={dataString.data.timelines[0].intervals[3].values.temperature}
         />
        <PrepWind
         precipitation={dataString.data.timelines[1].intervals[0].values.precipitationProbability}
         windGust={dataString.data.timelines[1].intervals[0].values.windGust}
         windSpeed={dataString.data.timelines[1].intervals[0].values.windSpeed}/>
    </div>
}

export default WeatherArea;