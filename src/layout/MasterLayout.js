import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AlphabetIndex from '../components/AlphabetIndex';
import WordsShow from '../components/WordsShow';
import Home from '../components/Home';
import Calculator from '../components/Calculator';



export default function MasterLayout(props) {

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
          <Route exact path="/maths-tables" element={<Calculator />} />
        </Routes>
      </BrowserRouter>

        

    </div>
  )
}
