import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" fixed min-h-screen w-screen"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">
            <button 
            onClick={()=>{setColor("red")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
              <button
              onClick={()=>{setColor("blue")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
              <button
              onClick={()=>{setColor("green")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
              <button
              onClick={()=>{setColor("brown")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
              <button
              onClick={()=>{setColor("black")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
              <button
              onClick={()=>{setColor("pink")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
              <button
              onClick={()=>{setColor("grey")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
              <button
              onClick={()=>{setColor("violet")}}
              className="outline-none px-3 py-1.5 rounded-xl text-zinc-100 shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
