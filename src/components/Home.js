import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MasterLayout from '../layout/MasterLayout';
import AlphabetIndex from './AlphabetIndex';
import Navbar from './Navbar';


class Home extends React.Component{
  render(){

    return(
     <MasterLayout>

      <div className='home'>

        <BrowserRouter>
          <Routes>
            <Route exact path="/alphabet" element={ <AlphabetIndex/> } >
            </Route>
          </Routes>
        </BrowserRouter>

        </div>
    </MasterLayout>
    )
  }
}

export default Home;