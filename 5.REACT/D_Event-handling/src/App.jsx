import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email:"", phone:""})

  const handleClick = () => {
    console.log('hey I am Clicked!')
  }

  const handleClick2 = (a) => {
    console.log('hey I am clicked and value = ', a)
  }

  const handleMouseOver = () => {
    console.log('hey I am Mouseover!')
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)            // ekahne check korbo jeta type korbo ekta letter kom ashbe..why?
  } 

  return (
    <>
      <div className="button">
        <button onClick={handleClick} onMouseOver={handleMouseOver}> CLick me! </button>
        {/* kicu pass korte chaile evabe arraow function diye pass korte hbe */}
        <button onClick={() => handleClick2(3)}> Click me also! </button>
      </div>

      {/*  input nite gele  */}
    <input type="text" name="email" value={form.email} onChange={handleChange} />
    <input type="text" name="phone" value={form.phone} onChange={handleChange} />
    </>
  )
}

export default App
