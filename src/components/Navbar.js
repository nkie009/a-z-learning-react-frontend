import React from 'react'
import './css/Navbar.css'
// import { useNavigate } from 'react-router-dom';


export default function Navbar() {

  // const navigate = useNavigate();

  return (

    <div className='navbar'>

    <div>logo goes here</div>
    
    <div className='navTabs'>
      <a className="homeTab" href="/">Home</a>
      |
      <a className="azTab" href="/alphabets">A-Z</a>
      |
      <a className="plusTab" href="/maths-tables">+ table</a>
    </div>

    </div>
  )
}
