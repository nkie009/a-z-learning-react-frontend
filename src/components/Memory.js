import { useEffect, useState } from "react";
import './css/Memory.css'
import SingleCard from "./SingleCard";

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
  const [choiceOne, setChoiceOne] = useState(null) //first click will updates the choice one
  const [choiceTwo, setChoiceTwo] = useState(null) //second click will updates the choice two


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      //duplicate the above array 'carImages' into line 18
      .sort(() => Math.random() - 0.5) //each pair item on this array. if the order returns less than 0 the order of item stay the same. if the its greater than it will be swap. Math.random give you a random from 0 - 1. 
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(shuffledCards)//to update the state
    setTurns(0)// every time click the new game button will reset the game
  }
  console.log('check here for shuffleCards', cards, turns)
  
  //handle a choice
  const handleChoice = (card) => {
    // console.log('checked card',card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }// if choiceOne is null which means we dont have a selection for ChoiceOne, if choiceOne has a value which is selected then setChoiceTwo will run and update choice two

  return (
    <div className="game">
      <h1 className="titleGame">Memory Game</h1>

      <button className="newGameButton" onClick={shuffleCards}>New Game</button>


    <div className="cardGrid">

      {cards.map(card =>(
        <SingleCard key={card.id} card={card} handleChoice={handleChoice}/> 
        /* here is to pass down props 'card' to Single Card componenet */
      ))}
    </div>




    </div>
  )
}
