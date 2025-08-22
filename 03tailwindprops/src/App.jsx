// import { useState } from 'react'
import "./App.css";
import Cards from "./components/Cards";

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: "Anushka",
    age: 21
  }
  let newArr = [1,2,3];

  return (
    <>
      <h1 className="bg-green-400 text-balck p-4 rounded-xl">Hello</h1>
      <Cards username="Yt" price="3456$"/>
      <Cards username="Anuhska" price="2754$" />
    </>
  );
}

export default App;
