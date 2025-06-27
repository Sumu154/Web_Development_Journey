import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Clock1 from './Components/Clock1_class'
import Clock2 from './Components/Clock2_function'

function App() {
  const divStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  };

  return (
    <div>

      <h2>Clock using Class Component:</h2>
      <div  style={divStyle} >
        <Clock1 locale="en-US" /> {/* Example: US English format */}
      </div>
      

      <h2>Clock using Function Component:</h2>
      <div  style={divStyle} >
        <Clock2 locale="bn-BD" /> {/* Example: Bengali Bangladesh format */}
      </div>
      
    </div>
  );
}

export default App;