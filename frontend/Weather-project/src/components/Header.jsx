import React, {useContext, useState} from 'react'
import StormIcon from '@mui/icons-material/Storm';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import handleSubmit from './HandleSubmit';
import { MyContext } from './MyContext';
import { MyLoadingContext } from './UpdatedLoadingContext';

function Header(){
    const [Data, setData] = useState("hello")
    const { setUpdatedData } = useContext(MyContext)
    const { setUpdatedLoading } = useContext(MyLoadingContext)
 
    return <header className='Header'>
        <div className='IconDiv'>
            <div>
                <h1 className='Icon'><StormIcon fontSize='large'/> Weather App</h1>
            </div>
            <form onSubmit={(event) => {handleSubmit(event, Data, setUpdatedData, setUpdatedLoading)}}>
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