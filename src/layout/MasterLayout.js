import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AlphabetIndex from '../components/AlphabetIndex';
import WordsShow from '../components/WordsShow';
import Home from '../components/Home';


function MasterLayout(props) {

  console.log(props);

  return (
    <div>
      <Navbar />
      {props.children}


      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
            {/* <Route exact path="/words/:id" element={ <WordsShow/> } > */}

            <Route exact path="/alphabets" element={<AlphabetIndex />} />
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default MasterLayout