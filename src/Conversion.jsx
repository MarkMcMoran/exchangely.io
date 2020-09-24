import React from 'react';
import { Container, Button, Card, Dropdown, FormControl} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export class Conversion extends React.Component {

    constructor(props){

        super(props);

            this.state = {
                currencySymbol: this.props.currencySymbol[0],
              

            //    value: this.props.currencySymbol[]
            }
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleInputChange = (event) => {
        console.log(`Hillo mr ${event}vent`);

        this.setState({
            currencySymbol: event.target.value
            
          
        });
       
        console.log(`Target value is :${event.target.value}`);
    }


    handleSubmission = (event) => {
        event.preventDefault();
        this.setState({

            
           // currencySymbol: this.state.currencySymbol[e.target]
        })
        alert(`Currency symbol is ${this.state.currencySymbol}`);
    }
    

    render (){
    const titleApp = `Convertly.io`;
    const desc = ` ${titleApp} a React application using exchangeratesapi.io API to convert currencies`;
    
    console.log(`The state boi: ${this.state}`);

    return (
        
        <Container>
            <Card variant="primary">
                <Card.Body>
    <Card.Title>{titleApp}</Card.Title>
                    <Card.Text>
                    { desc }
                    </Card.Text>
                <Dropdown >
                    <Dropdown.Toggle variant="danger">
                        Select Currency
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            { 
                            this.props.currencySymbol.map(currency =>
                                <Dropdown.Item 
                                id="currencySymb0l"
                                key={currency.key} 
                                onSelect={this.handleInputChange.bind(this)}
                                onChange={this.handleSubmission.bind(this)}
                                 
                                >
                                {currency.id}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                        
                       <p>Selected currency: {this.state.currencySymbol} </p> 
                </Dropdown>  
                <FormControl></FormControl>
                    <Button onClick={this.handleCalc} variant="danger" size="sm" id="convertClick">Convert</Button>
                    
                    </Card.Body>
            </Card>
        </Container>
       );
    }
    
}

export default Conversion;
