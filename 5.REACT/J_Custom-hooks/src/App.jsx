import { useState } from 'react'
import './App.css'

import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Custom hook example </h1>
      <Home></Home>
      
    </>
  )
}

export default App
