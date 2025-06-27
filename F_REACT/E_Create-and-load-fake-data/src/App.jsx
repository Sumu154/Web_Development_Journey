import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClientSideFakeData from './Components/FakeDataFetch/ClientSideFakeData'
import ApiFakeData from './Components/FakeDataFetch/ApiFakeData'
import ActualRealData from './Components/FakeDataFetch/ActualRealData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <ClientSideFakeData />

      <ApiFakeData />

      <ActualRealData />
      
    </>
  )
}

export default App
