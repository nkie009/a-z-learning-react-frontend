import React from 'react'
import './css/SingleCard.css'

//the below has pass down the card, handleChoice and flipped props from Memory component
export default function SingleCard({card, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    if(disabled === false){
      handleChoice(card)
    }
  } // here is to update the state, also pass card to the prop handleChoice

  return (
    <div  className="card">
      <div className={flipped ? "flipped" : ""} id="test">
        <img className="front" src={card.src} alt="frontCard" />
        <img className="back" src="/images/azlearning.svg" alt="backCard" onClick={handleClick} />
      </div>
    </div>
  )
}
