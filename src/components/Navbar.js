import React from 'react'
import './css/Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  return (

    <div className='navbar'>

      <div className='navTabs'>

        <img className='logo' src={`./images/azlearning.svg`} alt="azlogo" onClick={() => navigate("/")} />

        <a className="azHome" href="/">Home</a>

        <img className="azTab" src={`./images/abcNavbar.svg`} alt="times" onClick={() => navigate('/alphabets')} />


        <a className="timesTab" href="#/maths-tables">Calculator</a>

        <a className="kidsVideo" href="#/learning-videos">Videos</a>

        <a className="matchGame" href="#/matching-game">Mini Game</a>

      </div>

    </div>
  )
}
