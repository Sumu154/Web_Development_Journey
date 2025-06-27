import { useState } from 'react'
import './App.css'

import SimpleForm from './Components/SimpleForm'
import StatefulForm from './Components/IndividualControlledForm'
import RefForm from './Components/RefForm'
import HookForm from './Components/HookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Form handling</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
      
    </>
  )
}

export default App
