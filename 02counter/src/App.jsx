import React, { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("value added", counter)
    if (counter < 20) {
     
      
    }
  }

  const removeValue = () => {
    if (counter > 0) {

      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value  {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
