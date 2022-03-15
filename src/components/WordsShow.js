import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import './css/WordsShow.css'

const BASE_URL_WORDS = 'http://localhost:3000/words/'


function WordsShow() {
  // word is for storing the response from the api backend, which will be the 'word' object
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
      const res = await axios.get(BASE_URL_WORDS + character);
      console.log('CHECK Response', res.data);
      setWord(res.data);
    } catch (err) {
      console.log('Error in search AJAX', err);
      setError(err);
    }
    setLoading(false);
  }; // end of fetchData

  const refresh = () => {
    fetchData();
    setLoading(true);
  };

  // console.log('WORD', word)
  const { item, definition, image_items } = word


  return (
    <div className="wordShow">
      <h1>WordsShow page</h1>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="showCard">
          <img className="itemShowImage" src={`http://localhost:3000/assets/${image_items}`} />
          <p>{item}</p>
          <p>{definition}</p>
          <button onClick={refresh}>Random Pick</button>
        </div>
      )}

    </div>

  )
}

export default WordsShow;