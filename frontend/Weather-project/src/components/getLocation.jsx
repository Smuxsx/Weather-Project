import React from 'react'

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

export default getCurrentLocation;