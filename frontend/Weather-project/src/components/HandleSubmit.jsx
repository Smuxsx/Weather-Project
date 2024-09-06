import React, { useContext } from 'react'

async function handleSubmit(event, Data, setUpdatedData, setUpdatedLoading, setCityName, setErrorQuery){
    event.preventDefault();
    try{
        setUpdatedLoading(true)
        const response = await  fetch('http://localhost:4000/postData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
           },
            body: JSON.stringify({CityName: Data})
        })
        
        if(!response.ok){
            throw new Error(`HTTP error: status ${response.status}`)
        }
        setCityName(Data)
        const data = await response.json();
        console.log(data)
        setErrorQuery(false)
        setUpdatedData(data)
    } catch(error){
        setErrorQuery(true)
    } finally {
        setUpdatedLoading(false)
    }
};

export default handleSubmit;