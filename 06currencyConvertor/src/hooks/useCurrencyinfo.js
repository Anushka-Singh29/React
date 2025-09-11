import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {

  const [data, setData] = useState({}); //kuchh value na aye toh khaali rahe
  useEffect(() => {
    let fromCurrency = 'usd';
let toCurrency = 'inr';
     // 1. Build the NEW URL with only the 'from' currency
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

    const response = await fetch(url);
    const data = await response.json();

    // 2. Access the rate using the NEW nested structure
    const rate = data[fromCurrency][toCurrency];
    
    console.log(`Rate from ${fromCurrency} to ${toCurrency} is: ${rate}`);
    return rate;

  } catch (error) {
    console.error("Failed to fetch currency data:", error);
  }
    // fetch(
    //   `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/{fromCurrency}.json`
    // )
    //   .then((res) => setData(res[currency]))
    //   .catch((error) => console.error("Failed to fetch data:", error));
    // .then((res)=>res.json()) //converting dat ainto jason, next will be holding data
    // .then((res)=> setData(res.currency)) // jo response aya hai usme se currency nikal lo for key value
    console.log(data);
  , [currency]);

  console.log(data);
  return data;
}

export default useCurrencyinfo;
