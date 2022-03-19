import React from 'react'
import './css/SingleCard.css'


export default function SingleCard({card}) {
  return (
    <div  className="card">
      <div>
        <img className="front" src={card.src} alt="frontCard" />
        <img className="back" src="/images/azlearning.svg" alt="backCard" />
      </div>
    </div>
  )
}
