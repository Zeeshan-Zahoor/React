import {useState, useEffect} from "react"


function useCurrencyInfo(currency) {
    const curr = currency.toLowerCase();
    const [data, setData] = useState({}); // return an empty object by default for prevention of API error response
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[curr]));
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo