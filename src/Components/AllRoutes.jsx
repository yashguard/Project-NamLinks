import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Login from './Login'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/service' element={<Service />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='*' element={<h1>404 Error Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
