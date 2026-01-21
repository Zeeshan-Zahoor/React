import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(10);

  // let count = 10;
  const addCount = () => {
    if(count >= 20) return;
    count ++;
    setCount(count);
    console.log(count);
  }

  const subtractCount = () => {
    if(count <= 0) return;
    count --;
    setCount(count);
    console.log(count);
  }
  
  return (
    <>
      <h1>Welcome to the React Counter</h1>
      <h2>Count: {count}</h2>
      <button
      onClick={addCount}
      >Increment</button>
      <br />
      <br />
      <button
      onClick={subtractCount}
      >Decrement</button>
    </>
  )
}

export default App
