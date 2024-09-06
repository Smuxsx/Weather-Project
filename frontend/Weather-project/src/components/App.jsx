import React, {useState, useEffect} from 'react'
import Header from './Header'
import WeatherArea from './WeatherArea'
import "../index.css"
import { MyContext } from './MyContext'
import { MyLoadingContext } from './UpdatedLoadingContext'
import { MyCityContext } from './MyCityContext'
import { MyErrorContext } from './MyErrorContext'

function App(){
    const [updatedData, setUpdatedData] = useState("")
    const [updatedLoading, setUpdatedLoading] = useState(false)
    const [CityName, setCityName] = useState("London")
    const [ErrorQuery, setErrorQuery] = useState(false)

    return <div>
        <MyContext.Provider value={{ updatedData, setUpdatedData}}>
        <MyLoadingContext.Provider value={{updatedLoading, setUpdatedLoading}}>
        <MyCityContext.Provider value={{CityName, setCityName}}>
        <MyErrorContext.Provider value={{ErrorQuery, setErrorQuery}}>
        <Header />
        <WeatherArea />
        </MyErrorContext.Provider>
        </MyCityContext.Provider>
        </MyLoadingContext.Provider>
        </MyContext.Provider>
    </div>
}

export default App;
