import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className='form'>
     <Nav />
     <form>
       <label>Enter your First Name :</label><input className='fname' type="text" /><br />
       <label>Enter your Last Name :</label><input className='lname' type="text" /><br />
       <label>Enter your Email :</label><input className='email' type="email" /><br />
       <label>Enter your Password :</label><input className='password' type="password" /><br />
       <Link to='/' type="submit" id='submit'>Create account</Link>
     </form>
   </div>
  )
}

export default Signup
