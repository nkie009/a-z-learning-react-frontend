import React from 'react'
import './css/Navbar.css'
// import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  // const navigate = useNavigate();

  return (

    <div className='navbar'>
    
    <a href="/">Home</a>
    |
    <a href="/alphabets">A-Z</a>

    </div>
  )
}
