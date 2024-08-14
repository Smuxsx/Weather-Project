import React from 'react'
import WeatherTemperature from './WeatherTemperature'

function WeatherTempDays(props){
    return <div className='viewPortDaysTemp'>
        <div className='daysTemp'>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temp0}/>                
            </div>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temp1}/>
            </div>
            <div className='DaysBoxDiv'>
                <WeatherTemperature temperature={props.temp2}/>
            </div>
            <div className='DaysBoxDiv'>
               <WeatherTemperature temperature={props.temp3}/>
            </div>
        </div>
    </div>
}

export default WeatherTempDays