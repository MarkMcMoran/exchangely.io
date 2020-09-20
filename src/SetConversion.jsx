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
        setCurrencies(Currency.rates);
    }

    return (
        <div>
           
           {/* Prints out that is a literal object */}

    { 
    currencies.toString( curr =>(
            <Conversion /> 

    ))}

         </div>
       

    )
}
export default SetConversion;