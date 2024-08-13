import React from 'react'
import WeatherTemperature from './WeatherTemperature'

function WeatherTempDays(props){
    return <div className='viewPortDaysTemp'>
        <div className='daysTemp'>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temperature}/>                
            </div>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temperature}/>
            </div>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temperature}/>
            </div>
            <div className='DaysBoxDiv'>
               <WeatherTemperature temperature={props.temperature}/>
            </div>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temperature}/>
            </div>
        </div>
    </div>
}

export default WeatherTempDays