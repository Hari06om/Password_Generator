import { useState,useCallback  } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [uppercase,setUppercase] = useState(false)
  const [lowercase,setLowercase] = useState(false)
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = " "
    let string = " "

    if(uppercase){
      string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowercase){
      string += "abcdefghijklmnopqrstuvwxyz"
    }
    if(numbers){
      string += "0123456789"
    }

    if(symbols){
      string += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }
    
    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * string.length)
      pass += string.charAt(char)
    }
    setPassword(pass)

  } , [length,uppercase,lowercase,numbers,symbols])

  return (
    <div className="max-w-xl mx-auto shadow-md rounded-lg px-6 py-5 my-10 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="w-full bg-white focus:outline-none px-4 py-2 text-gray-800"
          placeholder="Generate Password"
          readOnly
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600"
          onClick={() => {
            navigator.clipboard.writeText(password)
          }}
        >
          Copy
        </button>
      </div>
      <div className="flex items-center justify-between mb-6 gap-x-4">
        <div className="flex items-center gap-x-2">
          <label htmlFor="length" className="text-white font-medium">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer accent-orange-500"
            onChange={e => setLength(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={e => setUppercase(e.target.checked)}
          />
          Uppercase
        </label>
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={lowercase}
            onChange={e => setLowercase(e.target.checked)}
          />
          Lowercase
        </label>
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={numbers}
            onChange={e => setNumbers(e.target.checked)}
          />
          Numbers
        </label>
        <label className="flex items-center gap-x-2 text-white">
          <input
            type="checkbox"
            checked={symbols}
            onChange={e => setSymbols(e.target.checked)}
          />
          Symbols
        </label>
      </div>
      <button
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 font-semibold"
        onClick={generatePassword}
      >
        Generate Password
      </button>
    </div>
  )
}

export default App
