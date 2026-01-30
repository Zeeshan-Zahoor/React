import { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'; 
import InputBox from './components/InputBox'

import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if(!currencyInfo[toCurrency]) return;
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  useEffect(() => {
    convert();
  }, [amount, fromCurrency, toCurrency, currencyInfo])

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  console.log(options)
  return (
    <div className="min-h-screen flex items-center justify-center ">
      
      <div className="relative w-full max-w-lg rounded-2xl bg-white/10 backdrop-blur-lg p-6 shadow-xl border border-white/20">

        {/* FROM */}
        <InputBox 
            label={"From"}
            amount={amount}
            selectCurrency= {fromCurrency}
            onCurrencyChange={(fromCurrency) => setFromCurrency(fromCurrency)}
            onAmountChange={(amount) => setAmount(amount)}
            currencyOptions={options}
        />

        {/* SWAP BUTTON */}
        <div className="flex justify-center -my-4 z-10 relative">
          <button className="bg-blue-600 text-white px-5 py-1 rounded-md shadow-md hover:bg-blue-700"
          onClick={swap}>
            swap
          </button>
        </div>

        {/* TO */}
        <InputBox 
            label={"To"}
            amount={convertedAmount}
            selectCurrency= {toCurrency}
            onCurrencyChange={(toCurrency) => setToCurrency(toCurrency)}
            currencyOptions={options}
        />

        {/* CONVERT BUTTON */}
        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        onClick={convert}>
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  )
}

export default App
