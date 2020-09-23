import React from 'react';
import { Container, Button, Card, Dropdown, FormControl} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export class Conversion extends React.Component {
    render (){
        const calc = () => {
            
        };
        return (
    <Container>
            <Card variant="primary">
    <Card.Body>
    <Card.Title>Convertly.io</Card.Title>
    <Card.Text> A React application using exchangeratesapi.io API to convert currencies.</Card.Text>
    <Dropdown >
        <Dropdown.Toggle variant="danger">
        Select Currency
        </Dropdown.Toggle>
        <Dropdown.Menu>
            { this.props.currencySymbol.map(currency =>
            <Dropdown.Item>
              {currency.id}
            </Dropdown.Item>)}
        </Dropdown.Menu>
    </Dropdown>  
     <FormControl></FormControl>
        <Button onClick={calc}variant="danger" size="sm" id="convertClick">Convert</Button>
        </Card.Body>
    </Card>
    </Container>
       );
    }
    
}

export default Conversion;
