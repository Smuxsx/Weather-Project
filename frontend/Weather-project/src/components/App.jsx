import React, {useState, useEffect} from 'react'
import Header from './Header'
import WeatherArea from './WeatherArea'
import "../index.css"
import { MyContext } from './MyContext'
import { MyLoadingContext } from './UpdatedLoadingContext'

function App(){
    const [updatedData, setUpdatedData] = useState("")
    const [updatedLoading, setUpdatedLoading] = useState(false)

    return <div>
        <MyContext.Provider value={{ updatedData, setUpdatedData}}>
        <MyLoadingContext.Provider value={{updatedLoading, setUpdatedLoading}}>
        <Header />
        <WeatherArea />
        </MyLoadingContext.Provider>
        </MyContext.Provider>
    </div>
}

export default App;
