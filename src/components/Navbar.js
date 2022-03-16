import React from 'react'
import './css/Navbar.css'
// import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  // const navigate = useNavigate();

  return (

    <div className='navbar'>

    <div>logo goes here</div>
    
    <a href="/">Home</a>
    |
    <a href="/alphabets">A-Z</a>
    |
    <a href="/maths-tables">+ table</a>


    </div>
  )
}
