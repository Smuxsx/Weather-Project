import React from 'react'
import StormIcon from '@mui/icons-material/Storm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return <header className='Header'>
        <div className='IconDiv'>
            <div>
                <h1 className='Icon'><StormIcon fontSize='large'/> Weather App</h1>
            </div>
            <form action="/postData" method="post">
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
                 />
                <Button variant="contained" style={{height: "60px"}} endIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
           <div style={{width: "12%"}}></div>
        </div> 
        
    </header>
}

export default Header;