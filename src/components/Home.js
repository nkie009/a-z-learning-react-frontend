import React from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>

      <h1>Home</h1>

      <div>banner goes here</div>
      
      <button onClick={ () => navigate('/alphabets')}>A-Z</button>

    </div>
  )
}






