import React from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CloudIcon from '@mui/icons-material/Cloud';

function PrepWind(props){

    return <div className='viewPrepWind'>
        <div className='daysTemp PrepClass'>
            <div className='CurrentWeather PrepWind'>
                <WaterDropIcon className="WeatherIcon" style={{ fontSize: "6.5rem"}}/>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand"}}>Precipitation Probability</h2>
                <pre className='Data DataDay PrepStyle' style={{marginTop: "8rem"}}>{props.precipitation}</pre>
            </div>
        </div>
        <div className='daysTemp PrepClass'>
            <div className='CurrentWeather PrepWind'>
                <CloudIcon className='WeatherIcon' style={{ fontSize: "6.5rem"}}/>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand", marginLeft: "1rem"}}>Wind </h2>
                <pre className='Data DataDay PrepStyle' style={{marginTop: "7rem", fontSize: "1.5rem"}}>Wind Speed: {props.windSpeed + " Km/h"}<br></br> Wind Gust: {props.windGust + " Km/h"}</pre>
            </div>
        </div>
    </div>
}

export default PrepWind;