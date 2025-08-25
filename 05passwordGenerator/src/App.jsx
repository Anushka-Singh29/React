import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }

    if (charAllowed) {
      str = str + "!@#$%^&*(){}~`<>";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
      // console.log(pass);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //method
  const copyPasstoClip = useCallback(() => {
    //passwordRef is taken to hightlight copying
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //run karkne ka goa
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // console.log(setLength)

  return (
    <>
      <div className="bg-gray-800 p-3 m-6 rounded-lg ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-zinc-200 h-max">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="shrink-0 rounded-lg bg-blue-700 px-4 py-2 text-white
             font-semibold shadow-md
             transition-all duration-150 ease-in
             hover:bg-blue-600 hover:shadow-lg
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
             active:scale-95 active:bg-blue-800"
            onClick={copyPasstoClip}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="text-white">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="text-white">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
