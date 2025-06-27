import { useState } from 'react'
import './App.css'

import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Context Api </h1>

      <Home></Home>
      
    </>
  )
}

export default App
