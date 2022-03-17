import React from 'react'
import './css/Home.css'
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='home'>

      <div className="bannerImg">
        <img className="banner1" src={`./images/ed.jpg`} alt="edBanner" />
      </div>

      <div className="tableButtons">

        <div className="azButton" onClick={() => navigate('/alphabets')}>A-Z</div>

        <div className="imgButton">
          <img className="plusButton" src={`./images/plus.svg`} alt="plus" onClick={() => navigate('/maths-tables')} />
          <img className="minusButton" src={`./images/minus.svg`} alt="plus" onClick={() => navigate('/maths-tables')} />
          <img className="timesButton" src={`./images/times.svg`} alt="plus" onClick={() => navigate('/maths-tables')} />
          <img className="divideButton" src={`./images/divide.svg`} alt="plus" onClick={() => navigate('/maths-tables')} />
        </div>

        {/* <div className="aboutUs">
          <h2>About</h2>
          <p>asdf;kjasdf;klas;dlfkj;lsadjf;asd;flkjas;df;asldfj;sldkf</p>
        </div> */}
      </div>
    </div>
  )
}






