import React from 'react'

function CityName(){
    const now = new Date().getUTCDay()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

    return  <div className="CityName">
        <h1 style={{fontFamily: "Edu AU VIC WA NT Hand", fontSize: "2rem"}}>{daysOfWeek[now]}, London</h1>
    </div>
}

export default CityName;