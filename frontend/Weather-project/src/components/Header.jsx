import React, {useState} from 'react'
import StormIcon from '@mui/icons-material/Storm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CityName from './CityName';

function Header(){
    const [Data, setData] = useState("hello")

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4000/postData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({CityName: Data})
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success", data)
        })
        .catch((error) => {
            console.error("Error:", error)
        })
    };

    return <header className='Header'>
        <div className='IconDiv'>
            <div>
                <h1 className='Icon'><StormIcon fontSize='large'/> Weather App</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                 id="filled-basic"
                 label="Enter a city Name"
                 style={{width: "400px"}}
                 variant="filled" 
                 name='CityName'
                 InputProps={{
                    style: {
                        fontSize: '20px',
                    },
                 }}
                 InputLabelProps={{
                    style: {
                        fontSize: '20px',
                    },
                 }}
                 onChange={(event) => {setData(event.target.value)}}
                 />
                <Button variant="contained" type='submit' style={{height: "60px"}} endIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
           <div style={{width: "12%"}}></div>
        </div> 
        
    </header>
}

export default Header;