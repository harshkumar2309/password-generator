import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*+-_=[]{}~`"

    for (let i = 1; i <=  length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <div className="w-full max-w-md mx-auto my-8 shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center text-3xl bold mb-4">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="bg-white outline-none w-full px-3 py-1"
          placeholder="Password"
          readOnly
        />
        <button className="bg-blue-600 text-white outline-none px-3 py-1 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-1">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numAllowed">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App
