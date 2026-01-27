import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let newPassword = "";
    let str = "abcdsefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(isNumberAllowed) str += "0123456789";
    if(isCharacterAllowed) str += "~!@#$%^&*()_-+={}[]:/.,<>?";

    for(let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(index);
    }
    setPassword(newPassword);
  }, [length, isCharacterAllowed, isNumberAllowed])

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed, generatePassword])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    window.alert("Password Copied to clipboard!");
  }, [password]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-5">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex gap-2">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            placeholder="Generate password"
          />
          <button
            onClick={copyPassword}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700">
            <span>Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            value={length}
            max={20}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isNumberAllowed}
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={isCharacterAllowed}
              onChange={() => setIsCharacterAllowed((prev) => !prev)}
            />
            Include Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
