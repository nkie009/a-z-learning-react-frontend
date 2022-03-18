import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import './css/WordsShow.css'
import { useNavigate } from 'react-router-dom';

const BASE_URL_WORDS = 'http://localhost:3000/words/'


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
  const { item, definition, image_items, image_letter } = word


  return (

    <div>
      <div className="backButton" onClick={() => navigate('/alphabets')} > &#8592; back</div>
    <div className="wordShow">

      
      <div className="leftLetter">
      <img className="letterShowImage" src={`http://localhost:3000/assets/${image_letter}`} />
      </div>

      {loading && <div>Loading</div>} 
      {!loading && (
        <div className="rightShowCard">
          <img className="itemShowImage" src={`http://localhost:3000/assets/${image_items}`} />
          <p className="tileItem">{item}</p>
          <p className="defineText">{definition}</p>
          <button onClick={refresh}>Random Pick</button>
        </div>
      )}

    </div>
</div>
  )
}
