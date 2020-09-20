import React from 'react';

import { Container, Button, Card, Dropdown } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Conversion () {


    return (
     <Container>
            <Card variant="primary">
    <Card.Body>
    <Card.Title>Convertly.io</Card.Title>
    <Card.Text> A React application using exchangeratesapi.io API to convert currencies.</Card.Text>

    <Dropdown >
        <Dropdown.Toggle variant="danger" >
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
        </Card.Body>
      </Card>
    </Container>
    );
         
};
