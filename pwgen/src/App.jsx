import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str = str + "0123456789";
    if (charAllowed) str = str + "!@#$%^&*()_=+<>?:;{}|/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
      setPassword(pass); //to read the value that we have generated
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasstoClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  },
[password])

  // passwordGenerator()

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-xl px-4 py-3 my-8 bg-gray-800">
        <h1 className="text-white text-center text-xl mb-6">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            className="bg-white outline-none w-full py-2 px-4 text-black "
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 
             transform transition-transform duration-150 ease-in-out 
             active:scale-95 active:bg-blue-800"
          onClick={copyPasstoClip}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flec items-center gap-x-1 text-white">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>

          <div className="flec items-center gap-x-1 text-white">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>

          <div className="flec items-center gap-x-1 text-white">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
