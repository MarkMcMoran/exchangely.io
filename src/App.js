import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const baseURL= "https://api.exchangeratesapi.io/latest";

  useEffect( async () =>
  {
    
    getCurrency();
  }, []);

  const getCurrency =  async () => {
    const response  = await fetch (baseURL);
    const Currency = await response.json();

    console.log(Currency);
  }
 


  return (
    <div className="App">
      <form className="ConvertCurrs">
        <select className="Curr1">
          <option>EUR</option>
        </select>
        <button className="convertBtn" type="submit">Convert</button>
      </form>
    </div>
  );
};

export default App;
