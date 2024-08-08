import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function WeatherContent(props){
    return <div>
        <div className="CityName">
            <h1 style={{fontFamily: "Edu AU VIC WA NT Hand", fontSize: "2rem"}}>London</h1>
        </div>
        <div className='CurrentWeather'>
            <WbSunnyIcon className="WeatherIcon" style={{ fontSize: "3.5rem"}}/>
            <pre className='Data'>{props.temperature + "°"}</pre>
        </div>
    </div>
}

export default WeatherContent