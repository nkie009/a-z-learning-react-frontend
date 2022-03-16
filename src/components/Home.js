import React from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>

      <h1>Home</h1>

      <div>banner goes here</div>
      
      {/* <button className="azButton" onClick={ () => navigate('/alphabets')}>A-Z</button> */}
      <div className="tableButtons">

        <div className="azButton" onClick={ () => navigate('/alphabets')}>A-Z</div>

        <img className="plusButton" src={`./images/plus.svg`} alt="plus" onClick={ () => navigate('/alphabets')} />
        <img className="minusButton" src={`./images/minus.svg`} alt="plus" onClick={ () => navigate('/alphabets')} />
        <img className="timesButton" src={`./images/times.svg`} alt="plus" onClick={ () => navigate('/alphabets')} />
        <img className="divideButton" src={`./images/divide.svg`} alt="plus" onClick={ () => navigate('/alphabets')} />




        
        

      </div>
    </div>
  )
}






