import React from 'react'
import StormIcon from '@mui/icons-material/Storm';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


function Header(){
    return <header className='Header'>
        <div className='IconDiv'>
            <div>
                <h1 className='Icon'><StormIcon fontSize='large'/> Weather App</h1>
            </div>
            <form action="/postData" method="post">
                <TextField id="filled-basic" label="Enter a city Name" variant="filled" name='CityName'/>
                <Button variant="contained" style={{height: "55px"}} endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
           <div style={{width: "12%"}}></div>
        </div> 
        
    </header>
}

export default Header;