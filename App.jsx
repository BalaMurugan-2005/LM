import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incerement = () => {
    setCount(count + 1)
  }
  const decreement = () =>{
    setCount(count - 1)
  }

  const reset = () =>{
    setCount(0);
  }

  return (
    <>
     <div>
      <h1>Count: {count}</h1>
      <button onClick={incerement}>Increment</button>
      <button onClick={decreement}>Decrement</button>
      <button onClick={reset}>Reset</button>
     </div>
    </>
  )
}

export default App
