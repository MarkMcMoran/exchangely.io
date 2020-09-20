import React,{useEffect, useState} from 'react';

import { Button, Card, Dropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Conversion () {
const baseURL= "https://api.exchangeratesapi.io/latest";

    const [convert, toConvert] = useState(['Currency 1', 'Currency 2']);

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
    <Card variant="primary">
        <Card.Title>Convertly.io</Card.Title>
    <Card.Body>
    <Card.Text> A React application using exchangeratesapi.io API to convert currencies.</Card.Text>
    <form className="ConvertCurrs">

    <Dropdown>
        <Dropdown.Toggle variant="danger">
        Select Currency
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>EUR</Dropdown.Item>
            <Dropdown.Item>GBP</Dropdown.Item>
            <Dropdown.Item>USD</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>   
        <br></br>
        <Button variant="danger" size="sm" id="convertClick">Convert</Button>
        </form>
        </Card.Body>
      </Card>
      

    )
         
}

