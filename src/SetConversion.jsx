import React,{useEffect, useState} from 'react';
import Conversion from './Conversion';

const SetConversion = () => {

const baseURL= "https://api.exchangeratesapi.io/latest";

const[currencies, setCurrencies] = useState([]);


useEffect(() => {
  getCurrency();
}, []);

    const getCurrency = async () => {
        const response  = await fetch (baseURL);
        const Currency = await response.json();
        setCurrencies(Currency);
        console.log(Currency.rates);
    }
 // Extracts json array from Object.
    const ratesArray = currencies.rates
    ? Object.entries(currencies.rates).map(([key, value]) => ({
        id: key,
        rate: value,
      }))
    : [];

    console.log(ratesArray[1]);

    return (
        <div>
            <>
<Conversion /> 
</>
         </div>
    

    )
}
export default SetConversion;