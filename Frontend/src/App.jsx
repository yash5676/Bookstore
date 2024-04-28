import React from 'react'
import Homepage from './home/Homepage'
import Course from './components/Course'
import {Route,Routes} from "react-router-dom"
import Courses from './Courses/Courses'

function App() {
  return(
  <>
  <Routes>
    <Route path="/" element={<Homepage/>}/>

    <Route path="/course" element={<Courses/>}/>
  </Routes>
  </>
  )
  }
export default App

