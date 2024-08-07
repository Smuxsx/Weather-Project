import React from 'react'
import StormIcon from '@mui/icons-material/Storm';

function Header(){
    return <header className='Header'>
        <div className='IconDiv'>
            <h1 className='Icon'><StormIcon fontSize='large'/> Weather App</h1>
        </div>
        
    </header>
}

export default Header;