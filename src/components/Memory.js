import { useEffect, useState } from "react";
import './css/Memory.css'

const cardImages = [
  { "src": "/images/apple.svg" },
  { "src": "/images/banana.svg" },
  { "src": "/images/cake.svg" },
  { "src": "/images/duck.svg" },
  { "src": "/images/egg.svg" },
  { "src": "/images/frog.svg" }
]


export default function Memory() {

  const [cards, setCards] = useState([])// here is to store the game into states
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      //duplicate the above array into line 18
      .sort(() => Math.random() - 0.5) //each pair item on this array. if the order returns less than 0 the order of item stay the same. if the its greater than it will be swap. Math.random give you a random from 0 - 1. 
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)//to update the state
    setTurns(0)// every time click the new game button will reset the game
  }

  console.log('check here for shuffleCards', cards, turns)

  return (
    <div className="game">


      <h1 className="titleGame">Memory Game</h1>

      <button className="newGameButton" onClick={shuffleCards}>New Game</button>


    <div className="card-grid">

      {cards.map(card =>(
        <div key={card.id} className="card">
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img src="/images/azlearning.svg" alt="cover" />

          </div>
        </div>
      ))}
    </div>




    </div>
  )
}
