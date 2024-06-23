import React from 'react'
import Homepage from './home/Homepage'

import {Route,Routes} from "react-router-dom"
import Courses from './Courses/Courses'

function App() {
  return(
  <>
  <div className="dark:bg-slate-900 dark:text-white">
  <Routes>
    <Route path="/" element={<Homepage/>}/>

    <Route path="/course" element={<Courses/>}/>
  </Routes>
  </div>
  </>
  )
  }
export default App

