import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordsShow from './WordsShow';

import axios from 'axios';
import './css/AlphabetIndex.css'


// const BASE_URL = 'http://localhost:3000/alphabets'

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];


function AlphabetIndex() {

  const navigate = useNavigate();

  // const [allAbc, setAllAbc] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(BASE_URL);
  //       console.log('Response', res.data);
  //       setAllAbc(res.data);
  //     } catch (err) {
  //       console.log('Error in search AJAX', err);
  //       setError(err);
  //     }
  //     setLoading(false)
  //   }

  //   fetchData();


  // }, []); //useEffect

  // handleClick = (ev) => {
  //   ev.preventDefault();
  //   console.log('check if clicked');
  // };

 
  return (
    <div>
      {(
        <div className='abcBox'>
          {letters.map(letter => (
            <div key={letter} className="alphabetsIndex">
              <img className="lettersIndex" src={`http://localhost:3000/assets/${letter}.svg`} onClick={ () => navigate(`/alphabets/${letter}`)}/>
            </div>
          ))}

        </div>
      )}
    </div>
  )// return
} // AlphabetIndex

export default AlphabetIndex;