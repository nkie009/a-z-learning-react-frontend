import React from 'react'
import Navbar from '../components/Navbar';

function MasterLayout(props) {

  console.log(props);

  return (
    <div>
    <Navbar />
    {props.children}
    

    
    
    
    </div>
  )
}

export default MasterLayout