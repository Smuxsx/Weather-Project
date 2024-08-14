import React from 'react'
import WeatherTemperature from './WeatherTemperature'

function WeatherTempDays(props){
    const futureDate = new Date()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let futureday = daysOfWeek[futureDate.getDay()] 

    function dayOfWeek(number){
        futureDate.setDate(futureDate.getDate() + number)
        return futureday = daysOfWeek[futureDate.getDay()]
    }

    return <div className='viewPortDaysTemp'>
        <div className='daysTemp'>
            <div className='DaysBoxDiv'>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand", marginTop: "-23px"}}>{dayOfWeek(1)}</h2>
                <WeatherTemperature temperature={props.temp0}/>                
            </div>
            <div className='DaysBoxDiv'>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand", marginTop: "-23px"}}>{dayOfWeek(1)}</h2>
                <WeatherTemperature temperature={props.temp1}/>
            </div>
            <div className='DaysBoxDiv'>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand", marginTop: "-23px"}}>{dayOfWeek(1)}</h2>
                <WeatherTemperature temperature={props.temp2}/>
            </div>
            <div className='DaysBoxDiv'>
                <h2 className='CityName' style={{fontFamily: "Edu AU VIC WA NT Hand", marginTop: "-23px"}}>{dayOfWeek(1)}</h2>
               <WeatherTemperature temperature={props.temp3}/>
            </div>
        </div>
    </div>
}

export default WeatherTempDays