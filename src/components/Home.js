import React from 'react'
import AlphabetIndex from './AlphabetIndex';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <h1>home</h1>


        <Router>
          <Routes>
            <Route path="" element={ <AlphabetIndex/> }>
            </Route>
          </Routes>
        </Router>


      </div>
    )
  }
}

export default Home;