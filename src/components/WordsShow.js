import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import './css/WordsShow.css'

const BASE_URL_WORDS = 'http://localhost:3000/words/'


function WordsShow() {

  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log('id:', id);
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE_URL_WORDS + id);
        console.log('CHECK Response', res.data);
        setWords(res.data);
      } catch (err) {
        console.log('Error in search AJAX', err);
        setError(err);
      }
      setLoading(false)
    }

    fetchData();

  }, []); //useEffect


  const { item, definition, image_items } = words

  return (
    <div>
      <h1>WordsShow page</h1>
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="showCard">
          <img className="itemShowImage" src={`http://localhost:3000/assets/${image_items}`} />
          <p>{item}</p>
          <p>{definition}</p>
          <button>Random Pick</button>
        </div>
      )}

    </div>

  )
}

export default WordsShow;