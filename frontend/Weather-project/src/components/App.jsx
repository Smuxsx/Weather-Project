import React, {useState, useEffect} from 'react'
import Header from './Header'
import "../index.css"


function App(){
    let [text, setText] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    return <div>
        <Header />
    </div>
}

export default App;
