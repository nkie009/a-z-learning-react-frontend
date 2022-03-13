import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MasterLayout from '../layout/MasterLayout';
import AlphabetIndex from './AlphabetIndex';
import WordsShow from './WordsShow';
import Navbar from './Navbar';


class Home extends React.Component{
  render(){

    return(

      <div className='home'>

       Hello

       <AlphabetIndex />

        </div>
    )
  }
}

export default Home;