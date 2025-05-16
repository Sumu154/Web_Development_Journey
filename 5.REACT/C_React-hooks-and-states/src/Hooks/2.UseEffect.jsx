import { useEffect, useState } from 'react';

function UseEffectExample() {
  const [color, setColor] = useState(0)

  const changeColor = () => {
    setColor(color==='red'?'blue' : 'red');
  }

  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])


  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }  
  }, [])


  return (
    <div>
      <h3 style={{ color }}>The color is: {color}</h3>
      <button onClick={changeColor}>Toggle Color</button>
    </div>
  );

}

export default UseEffectExample;