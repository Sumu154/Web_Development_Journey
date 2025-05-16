import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



// 2 types components
// 1. Function components
const root1 = createRoot(document.getElementById('root1'));

function Clock1({  }){
  // chaile evabe style o add kora jay component e
  const clockStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <h1 className='heading' style={clockStyle}>      
      <span className="text"> { new Date().toLocaleTimeString(locale) } </span>
    </h1>
  )
}

// root.render(<Clock locale="en-US" />);
root1.render(<Clock1 locale="bn-BD" />);




// 1. class components
const root2 = createRoot(document.getElementById('root2'));

class Clock2 extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text"> {new Date().toLocaleTimeString(this.props.locale)} </span>
      </h1>
    )
  }
}

root2.render(<Clock2 locale="en-US" />);
// root2.render(<Clock2 locale="bn-BD" />);

