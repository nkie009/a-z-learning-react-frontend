import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AlphabetIndex from '../components/AlphabetIndex';
import WordsShow from '../components/WordsShow';
import Home from '../components/Home';


function MasterLayout(props) {

  // console.log(props);

  return (
    <div>
      <Navbar />
      {props.children}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />        
           <Route exact path="/alphabets" element={<AlphabetIndex />} />
           <Route exact path="/alphabets/:character" element={<WordsShow />} />

        </Routes>
      </BrowserRouter>


      <p className="copyright">frankie designed Copyright 2022 &copy;</p>
    </div>
  )
}

export default MasterLayout