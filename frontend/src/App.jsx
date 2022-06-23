import React, { useEffect, useState } from 'react';
import '../css/styles.css'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className='wrapper'>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

function Card(){
  return(
    <div className="card">
            <div class="cover__card">
                <img src="" alt=""/>
            </div>
            <hr/>
            <div class="footer__card">
                <h3 class="user__name">Mercurio</h3>
            </div>
        </div>
  )
}

export default App
