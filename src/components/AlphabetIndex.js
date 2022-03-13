import { useEffect, useState } from 'react';
import axios from 'axios'


const BASE_URL = 'http://localhost:3000/words'


function AlphabetIndex() {

  const [allWords, setAllWords] = useState([]);
  const [loading, setLoading] = useState( true );
  const [error, setError] = useState( null );

 useEffect(()=>{

  const fetchData = async () =>{
    setLoading(true);
    try{
      const res = await axios.get(BASE_URL);
      console.log('Response', res.data);
      setAllWords(res.data);
    } catch(err){
      console.log('Error in search AJAX', err);
      setError(err);
    }
    setLoading(false)
  }  

  fetchData();


 }, []); //useEffect

//  return {allWords, loading, error}

  return(
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        <h2>show index data</h2>
        {allWords.map(word => (
          <div key={word.id}>
            <img src={`http://localhost:3000/assets/${word.image_letters}`} />
          

          </div>
        ))}

      </div>
    )
    }
    </div>
  )// return
} // AlphabetIndex

export default AlphabetIndex;