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
          <Route path='/planet/:planet' element={<OnePlanet/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      {
        /* This is on a page
      <div className='wrapper'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      */
      }
    </SpaceBackground>
  )
  
}

export default App