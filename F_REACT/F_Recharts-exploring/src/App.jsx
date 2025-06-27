import { useState } from 'react'
import './App.css'

import LineCharts from './Components/LineCharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LineCharts></LineCharts>
    </>
  )
}

export default App
