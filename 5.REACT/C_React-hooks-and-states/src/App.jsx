import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseStateExample from './Hooks/1.UseState'
import UseEffectExample from './Hooks/2.useEffect'
import UseRefExample from './Hooks/3.UseRef'

function App() {
  const [count, setCount] = useState(0)

  // for useEffect
  

  return (
    <>
      <div>
      <h1> 1. UseSate Example </h1>
        <UseStateExample />
      </div>

      <div>
        <h1> 2. UseEffect Example </h1>
        <UseEffectExample />
      </div>

      <div>
      <h1>Use Ref Example</h1>
      <UseRefExample />
    </div>

    </>
  )
}

export default App
