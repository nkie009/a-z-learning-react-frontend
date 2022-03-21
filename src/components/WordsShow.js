import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import './css/WordsShow.css'
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config/constants'

const BASE_URL_WORDS = 'http://localhost:3000/words/'

// console.log("check if the site is in Dev or not:", process.env.NODE_ENV);


export default function WordsShow() {
  // word is for storing the response from the api backend, which will be the 'word' object
  const navigate = useNavigate();
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { character } = useParams();



  useEffect(() => {
    console.log('Char', character);
    fetchData();
  }, []); //useEffect

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE_URL + "words/" + character);
      console.log('CHECK Response', res.data);
      setWord(res.data);
      setLoading(false);
    } catch (err) {
      console.log('Error in search AJAX', err);
      setError(err);
    }
  }; // end of fetchData

  const refresh = () => {
    fetchData();
    setLoading(true);
  };

  if (loading === true) {
    return <p>Loading...</p>
  }

  // console.log('WORD', word)
  const { item, definition, image_items, image_letter } = word

  return (

    <div>
      <div className="backButton" onClick={() => navigate('/alphabets')} >&#8592; back
      </div>
      <div className="wordShow">


        <div className="leftLetter">
          <img className="letterShowImage" src={(API_BASE_URL + "assets/" + `${image_letter}`)} />
        </div>

        <div className="rightShowCard">
          <img className="itemShowImage" src={API_BASE_URL + "assets/" + `${image_items}`} />
          <p className="tileItem">{item}</p>
          <p className="defineText">{definition}</p>
          <button className="refreshButton" onClick={refresh}>Random Pick</button>
        </div>

      </div>
    </div>
  )
}
