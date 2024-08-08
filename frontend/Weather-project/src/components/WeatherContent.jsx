import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CityName from './CityName';

function WeatherContent(props){
    return <div>
        <CityName />
        <div className='CurrentWeather'>
            <WbSunnyIcon className="WeatherIcon" style={{ fontSize: "3.5rem"}}/>
            <pre className='Data'>{props.temperature + "°"}</pre>
        </div>
    </div>
}

export default WeatherContent