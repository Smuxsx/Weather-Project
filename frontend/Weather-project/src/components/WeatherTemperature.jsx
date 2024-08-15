import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CityName from './CityName';

function WeatherTemperature(props){
    const Celcius = props.temperature;

    return <div className='box0Div'>
        <div className='CurrentWeather'>
            <WbSunnyIcon className="WeatherIcon" style={{ fontSize: "3.5rem"}}/>
            <pre className='Data DataDay'>{Math.round(Celcius) + "°"}</pre>
        </div>
    </div>
}

export default WeatherTemperature;