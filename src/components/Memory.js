import { useEffect, useState } from "react";
import './css/Memory.css'
import SingleCard from "./SingleCard";

const cardImages = [
  { "src": "/images/apple.svg", matched: false },
  { "src": "/images/banana.svg", matched: false },
  { "src": "/images/cake.svg", matched: false },
  { "src": "/images/duck.svg", matched: false },
  { "src": "/images/egg.svg", matched: false },
  { "src": "/images/frog.svg", matched: false } //added matched property to set it as false
]


export default function Memory() {

  const [cards, setCards] = useState([])// here is to store the game into states
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null) //first click will updates the choice one
  const [choiceTwo, setChoiceTwo] = useState(null) //second click will updates the choice two
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      //duplicate the above array 'carImages' into here
      .sort(() => Math.random() - 0.5) //each pair item on this array. if the order returns less than 0 the order of item stay the same. if the its greater than it will be swap. Math.random give you a random from 0 - 1. 
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)//to update the state
    setTurns(0)// every time click the new game button will reset the game
  }
  // console.log('check here for shuffleCards', cards, turns)

  //handle a choice
  const handleChoice = (card) => {
    // console.log('checked card',card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }// if choiceOne is null which means we dont have a selection for ChoiceOne, if choiceOne has a value which is selected then setChoiceTwo will run and update choice two state

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      // if choiceOne src and choiceTwo src are the same then we have a match, then we update the setCards state
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            //if the card src matches the selected choice src, return card array to matched: true
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              // if not match then return card to unchanged
              return card
            }
          })
        })
        // console.log('those cards are match');
        resetTurn()//to reset turn function

      } else {
        console.log('those cards do not match');
        setTimeout(() => resetTurn(), 1100)
      }
    }
  }, [choiceOne, choiceTwo])// passing dependencies of the array as an augment choiceOne and choiceTwo.
  //useEffect will fire when the component first mount and then fired again when a dependency changes.

  console.log('check cards state', cards);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //the below is to start the game automically 
  useEffect(() =>{
    shuffleCards()
  }, [])

  return (
    <div className="game">
      <h1 className="titleGame">Memory Game</h1>

      <button className="newGameButton" onClick={shuffleCards}>New Game</button>

      <p>Turns: {turns}</p>

      <div className="cardGrid">

        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
          /* here is to pass down props 'card' to Single Card component */
        ))}
      </div>



    </div>
  )
}
