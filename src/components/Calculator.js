import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react'
import { useState } from 'react';
import './css/Calculator.css'


export default function Calculator() {

  const [result, setResult] = useState('');

  const handleClick = (ev) => {
    console.log('check e', ev);
    setResult(result + (ev.target.name))
  };// handleClick

  const clear = () => {
    setResult(""); // here is to set the results empty
  } // clear

  const equal = () => {
    setResult(eval(result));
  }// equal

  return (

    <div>

      <div className="calHeading">Calculator
      </div>

      <div className="calPage">

        <div className="tablesDiv">
          <img className="timesTable" src={`./images/timestables-01.svg`} alt="times" />
        </div>

        <div className="calculator">
          <div className="groupCal">
            <form>
              <input type="text" value={result} className="inputNum" />
            </form>
            <div className="keypad">
              <button onClick={clear} className="clear" id="bgColor">Clear</button>
              <button name="/" onClick={handleClick} id="bgColor">&divide;</button>
              <button name="7" onClick={handleClick}>7</button>
              <button name="8" onClick={handleClick}>8</button>
              <button name="9" onClick={handleClick}>9</button>
              <button name="*" onClick={handleClick} id="bgColor">&times;</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="-" onClick={handleClick} id="bgColor">&ndash;</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="+" onClick={handleClick} id="bgColor">+</button>
              <button name="0" onClick={handleClick}>0</button>
              <button name="." onClick={handleClick}>.</button>
              <button onClick={equal} className="equalButton" >=</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
