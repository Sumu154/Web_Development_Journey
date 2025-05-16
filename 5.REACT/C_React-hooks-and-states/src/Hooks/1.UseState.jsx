import { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(10)

  const addCount = () => {
    setCount(count+1)
  } 
  const removeCount = () => {
    setCount(count-1)
  }

  return (
    <>
      <h3> Count : {count} </h3>
      <button onClick={removeCount}> remove count! </button>
      <button onClick={addCount}> add count! </button>
    </>
  )
}

export default UseStateExample;