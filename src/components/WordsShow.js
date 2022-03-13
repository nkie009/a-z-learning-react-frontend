import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL_WORDS = 'http://localhost:3000/words/:id'


function WordsShow() {

  const [allWords, setAllWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE_URL_WORDS);
        console.log('Response', res.data);
        setAllWords(res.data);
      } catch (err) {
        console.log('Error in search AJAX', err);
        setError(err);
      }
      setLoading(false)
    }

    fetchData();


  }, []); //useEffect

  return (
    <div>WordsShow</div>
  )
}

export default WordsShow