import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/constants'
import { useEffect, useState } from 'react';

import './css/MatchingGame.css';

export default function MatchingGame() {

  const [gameWord, setGameWord] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gameMessage, setGameMessage] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setGameMessage("");
    try {
      const res = await axios.get(API_BASE_URL + "games/wordmatch");
      setGameWord(res.data)
      console.log("check RES here", res.data)
      setLoading(false);
    } catch (err) {
      console.log('Error in search AJAX', err);
      setError(err);
    } // try & catch
  } // fetchData

  useEffect(() => {
    fetchData();
  }, []); //useEffect did mount

  if (loading === true) {
    return <p>Loading...</p>
  }

  const selected = (clickedWord) => {
    console.log('check if clicked', clickedWord);
    if (clickedWord === gameWord.guess_word.item) {
      // console.log('word guessed');
      setGameMessage(" 🎈🎉✨Good Job! Correct🎉✨🎈")
    } else {
      // console.log('guess again');
      setGameMessage("Try Again 😉")
    }
  }

  return (
    <div className="mainGame">
      <h1 className="titleGame">Matching Game</h1>

      <button className="skipButton" onClick={fetchData}>Skip &#8594;</button>

      <div className="msg">{gameMessage}</div>

      <div className="matchingGame">

        <div className="imageGuess">
          <img className="guessImage" src={API_BASE_URL + "assets/" + gameWord.guess_word.image_items} />
        </div>

        <div className="wordsGuess">
          {gameWord.all_words.map(word => (
            <div key={word}>
              <h2 className="guessingWordsButton" onClick={() => selected(word)}>{word}</h2>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}
