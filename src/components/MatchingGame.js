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
    } catch (err) {
      console.log('Error in search AJAX', err);
      setError(err);
    } // try & catch
    setLoading(false);
  } // fetchData

  useEffect(() => {
    fetchData();
  }, []); //useEffect

  const newGame = () =>{
    fetchData();
    setLoading(true);
  }// set a new game

  return (
    <div className="matchingGame">
      <h1 className="titleGame">Matching Game</h1>

      <button className="newGameButton" onClick={newGame}>New Game</button>




    </div>
  )
}
