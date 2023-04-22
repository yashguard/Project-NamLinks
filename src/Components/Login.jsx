import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='form' style={{paddingTop:"360px"}}>
      <Nav />
      <form style={{height:"250px"}}>
        <label>Enter your Email :</label><input className='email' type="email" /><br />
        <label>Enter your Password :</label><input className='password' type="password" /><br />
        <Link style={{marginTop:"0"}} to='/' type="submit" id='submit'>Submit</Link>
      </form>
    </div>
  )
}

export default Login
