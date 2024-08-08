import React from 'react'

function WeatherArea(){
    function getCurrentLocation(){
        return new Promise((resolve, reject) => {
            if(!navigator.geolocation){
                reject(new Error('Geolocation is not supported by your browser'))
            } else {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude} = position.coords;
                        resolve({latitude, longitude})
                    },
                    (error) => reject(error),
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                )
            }
        })
    }
    
    // getCurrentLocation()
    //     .then(({latitude, longitude}) => {
    //         console.log(latitude + " " + longitude)
    //     })
    //     .catch((error) =>{
    //         console.log(error)
    //     })
    return <div className='CurrentWeather'>

    </div>
}

export default WeatherArea;