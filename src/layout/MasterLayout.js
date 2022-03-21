import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AlphabetIndex from '../components/AlphabetIndex';
import WordsShow from '../components/WordsShow';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Video from '../components/Video';
// import Memory from '../old/Memory'
import MatchingGame from '../components/MatchingGame';


export default function MasterLayout(props) {

  // console.log(props);

  return (
    <div>
      {props.children}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/alphabets" element={<AlphabetIndex />} />
          <Route exact path="/alphabets/:character" element={<WordsShow />} />
          <Route exact path="/maths-tables" element={<Calculator />} />
          <Route exact path="/learning-videos" element={<Video />} />
          <Route exact path="/matching-game" element={<MatchingGame />} />

        </Routes>
      </Router>



    </div>
  )
}
