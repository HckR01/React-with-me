import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-="
    
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, number, charAllowed])

  const copyPassword = () => {
    if (!password) return
    navigator.clipboard.writeText(password)
      .then(() => alert("Password copied!"))
      .catch(() => alert("Failed to copy password"))
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-black '>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full px-4 py-2 text-shadow-amber-500 bg-gray-800 text-white'
            placeholder='Generated Password'
            readOnly
          />
          <button onClick={copyPassword} className='bg-red-500 outline-none px-4 py-2 text-white'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber(!number)}
              id="numberInput"
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setcharAllowed(!charAllowed)}
              id='charInput'
              name='charInput'
              value={charAllowed}
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
          <button
            onClick={generatePassword}
            className="bg-green-500 px-4 py-2 rounded text-white ml-auto"
          >
            Generate
          </button>
        </div>
      </div>
    </>
  )
}

export default App
