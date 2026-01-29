import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange, 
    onCurrencyChange,
    selectCurrency = "USD",
    currencyOptions = []
}) {
    return (
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500">{label}</label>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
              className="text-xl font-semibold outline-none w-32"
            />
          </div>

          <div className="flex flex-col gap-1 text-right">
            <label className="text-sm text-gray-500">Currency Type</label>
            <select className="border rounded-md px-3 py-1"
                value={selectCurrency}
                onChange={(e) => (onCurrencyChange && onCurrencyChange(e.target.value))}
            >
              {currencyOptions.map((currency) => (
                <option
                    key={currency}
                    value={currency}> {currency}</option>
              ))}

            </select>
          </div>
        </div>
    )
}

export default InputBox