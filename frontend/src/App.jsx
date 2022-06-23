import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AllPlanets, OnePlanet, NotFound} from './pages';
import axios from 'axios'

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllPlanets/>}/>
        <Route path='/planet' element={<OnePlanet/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
