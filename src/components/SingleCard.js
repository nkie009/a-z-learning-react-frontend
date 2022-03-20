import React from 'react'
import './css/SingleCard.css'

//the below has pass down the card and handleChoice props from Memory componenet
export default function SingleCard({card, handleChoice}) {

  const handleClick = () => {
    handleChoice(card)
  } // here is to update the state, also pass card to the prop handleChoice

  return (
    <div  className="card">
      <div>
        <img className="front" src={card.src} alt="frontCard" />
        <img className="back" src="/images/azlearning.svg" alt="backCard" onClick={handleClick} />
      </div>
    </div>
  )
}
