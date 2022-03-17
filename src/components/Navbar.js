import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom';


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
      <a className="plusTab" href="/maths-tables"><img className="plusTab" src={`./images/plus.svg`} alt="plus" /></a>

      {/* <img className="plusTab" src={`./images/plus.svg`} alt="plus" onClick={ () => navigate('/maths-table')} />
      <img className="minusTab" src={`./images/minus.svg`} alt="plus" onClick={ () => navigate('/maths-table')} />
      <img className="timesTab" src={`./images/times.svg`} alt="plus" onClick={ () => navigate('/maths-table')} />
      <img className="divideTab" src={`./images/divide.svg`} alt="plus" onClick={ () => navigate('/maths-table')} /> */}
    </div>

    </div>
  )
}
