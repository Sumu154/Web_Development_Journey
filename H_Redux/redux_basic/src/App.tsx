import { } from 'react'

import { makeDecrement, makeIncrement } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';


function App() {
  // jekhane state change korte chai oikahne evabe dispatch korte hbe
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter)


  const handleIncrement = (amount: number) => {
    dispatch(makeIncrement(amount));
  }
  const handleDecrement = (amount: number) => {
    dispatch(makeDecrement(amount));
  }
  

  return (
    <>
      <div className='p-10'>
        <button onClick={() => handleIncrement(5)} className='bg-blue-800 text-white px-4 py-1.5'> Increment </button>
        <div className='text-2xl'> {count} </div>
        <button onClick={() => handleDecrement(5)} className='bg-blue-800 text-white px-4 py-1.5'> Decrement </button>
      </div>
    </>
  )
}

export default App
