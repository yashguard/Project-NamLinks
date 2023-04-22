import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Image/logo.png'

const Nav = () => {
   return (
      <header>
         <nav>
            <div className="logo">
              <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className="navLinks">
               <Link className='link' to='/'>Home</Link>
               <Link className='link' to='/about'>About</Link>
               <Link className='link' to='/service'>Service</Link>
            </div>
         </nav>
      </header>
   )
}

export default Nav
