import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import './css/AlphabetIndex.css'


const BASE_URL = 'http://localhost:3000/alphabets'


function AlphabetIndex() {

  const [allAbc, setAllAbc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE_URL);
        console.log('Response', res.data);
        setAllAbc(res.data);
      } catch (err) {
        console.log('Error in search AJAX', err);
        setError(err);
      }
      setLoading(false)
    }

    fetchData();


  }, []); //useEffect

  // handleClick = (ev) => {
  //   ev.preventDefault();
  //   console.log('check if clicked');
  // };

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>show index data</h2>
          {allAbc.map(abc => (
            <div key={abc.id} className="alphabetsIndex">
              <img className="lettersIndex" src={`http://localhost:3000/assets/${abc.image}`} onClick={() => navigate(`/alphabets/${abc.id}`)}/>
            </div>
          ))}

        </div>
      )}
    </div>
  )// return
} // AlphabetIndex

export default AlphabetIndex;