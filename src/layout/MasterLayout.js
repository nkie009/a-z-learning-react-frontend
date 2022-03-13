import React from 'react'
import Navbar from '../components/Navbar';

function MasterLayout(props) {

  console.log(props);

  return (
    <div>
    {/* put navbar here */}
    <Navbar />
    <h1>Hello world</h1>
    {props.children}
    

    
    
    
    </div>
  )
}

export default MasterLayout