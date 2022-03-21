import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/constants'
import { useEffect, useState } from 'react';

import './css/MatchingGame.css';

export default function MatchingGame() {

  const [gameWord, setGameWord] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
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
  }, []); //useEffect

  if (loading === true) {
    return <p>Loading...</p>
  }

  const selected = () => {
  console.log('check if clicked');
  }



  return (
    <div className="matchingGame">
      <h1 className="titleGame">Matching Game</h1>

      <div className="leftSideGame">
        <img className="guessImage" src={API_BASE_URL + "assets/" + gameWord.guess_word.image_items} />

        <div className="rightSideGame">

          {gameWord.all_words.map(WrongWord => (
            <div key={WrongWord}>
              <h2 className="WrongGuessingWords" onClick={selected}>{WrongWord}</h2>
            </div>
          ))}
        </div>


      </div>


    </div>
  )
}
