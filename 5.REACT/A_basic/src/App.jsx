import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ConditionalRendering from './Components/ConditionalRendering'
import Rendering from './Components/Rendering';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ConditionalRendering />
      </div>

      <div>
        {/* Including the Rendering component */}
        <Rendering />
      </div>
    </>
  )
}

export default App
