import React, { useContext, useEffect, useState } from 'react'
import { MyCityContext } from './MyCityContext'
import { MyErrorContext } from './MyErrorContext';

function CityName(){
    const now = new Date().getUTCDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const {CityName} = useContext(MyCityContext)
    const {ErrorQuery} = useContext(MyErrorContext)
    const [DisplayedCityName, setDisplayedCityName] = useState(CityName)
    const [errorName, setErrorName] = useState(CityName)

    useEffect(() => {
        if(ErrorQuery){
            // pass
        } else {
            const capitalizeFirstLetter = CityName.charAt(0).toUpperCase() + CityName.slice(1);
            setDisplayedCityName(capitalizeFirstLetter)
            setErrorName(DisplayedCityName)
        }
    }, [CityName])

    console.log(errorName)

    return  <div className="CityName">
        <h1 style={{fontFamily: "Edu AU VIC WA NT Hand", fontSize: "2rem"}}>{daysOfWeek[now]}, {ErrorQuery ? errorName : DisplayedCityName}</h1>
    </div>
}

export default CityName;