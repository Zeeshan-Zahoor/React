import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {

  const [toCurrency, setToCurrency] = useState("USD");

  return (
    <div className="min-h-screen flex items-center justify-center ">
      
      <div className="relative w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-xl border border-white/20">

        {/* FROM */}
        <InputBox 
            label={"to "}
            amount={200}
            selectCurrency= {toCurrency}
            onCurrencyChange={setToCurrency}
            currencyOptions={["INR", "USD", "PKR"]}
        />

        {/* SWAP BUTTON */}
        <div className="flex justify-center -my-4 z-10 relative top-1">
          <button className="bg-blue-600 text-white px-5 py-1 rounded-md shadow-md hover:bg-blue-700">
            swap
          </button>
        </div>

        {/* TO */}
        <div className="bg-white rounded-xl p-4 flex justify-between items-center mt-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">To</label>
            <input
              type="number"
              placeholder="0"
              className="text-xl font-semibold outline-none w-32"
            />
          </div>

          <div className="flex flex-col gap-1 text-right">
            <label className="text-sm text-gray-500">Currency Type</label>
            <select className="border rounded-md px-3 py-1">
              <option>inr</option>
              <option>usd</option>
              <option>eur</option>
            </select>
          </div>
        </div>

        {/* CONVERT BUTTON */}
        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Convert USD to INR
        </button>
      </div>
    </div>
  )
}

export default App
