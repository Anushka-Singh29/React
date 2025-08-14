import { useState } from 'react'
import './App.css'
import Card from '../components/Card'



function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Anushka",
    age: 21
  }

  let myArr = [1,2,3]

  return (
    <>
     <h1 className='bg-blend-color'>Tailwind test</h1>
       <Card username="Anushka" age={21} someobj={myArr} />
       <Card />
    </>
  )
}

export default App
