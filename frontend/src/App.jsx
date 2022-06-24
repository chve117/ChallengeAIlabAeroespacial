import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AllPlanets, OnePlanet, NotFound} from './pages';
import '../css/styles.css'
import axios from 'axios'
import SpaceBackground from './components/SpaceBackground';

function App() {

    useEffect(()=>{
      if(process.env.NODE_ENV!='development'){
        console.log(process.env.NODE_ENV)
        axios.get('http://localhost:5000/flask/hello').then(response => {
          console.log("SUCCESS", response)
        }).catch(error => {
          console.log("ERROR",error)
        })
      }
    }, [])

  return (
    <SpaceBackground>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPlanets/>}/>
          <Route path='/planet' element={<OnePlanet/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </SpaceBackground>
    {
    /* This is on a page
    <div className='wrapper'>
      <Card/>
      <Card/>
      <Card/>
    </div>*
    /
    }
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