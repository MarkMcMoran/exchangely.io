import React from 'react'
import {Button, Card, Container, Dropdown, FormControl, Form} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const titleApp = `Convertly.io`
const desc = `${titleApp} a React application using exchangeratesapi.io API to convert currencies`

export class Conversion extends React.Component {
    constructor(props) {
        super(props)
        // Starting off at -1 so I go through all indexes of the arr selectedCurr.
        this.state = {
            selectedCurr: -1,
            currVal: ""
        }
        this.handleSubmission = this.handleSubmission.bind(this)
    }
    formHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.currVal);

    }

    handleSubmission = (event) => {
        this.setState(
            {
                currVal: event.target.value
            } );

        console.log(this.state)
    }


    render() {
        const {currencySymbols} = this.props
        const selectedCurrency = currencySymbols.find(
            (currency) => currency.id === this.state.selectedCurr
        )


        return (
            <Container>
                <Card variant="primary">
                    <Card.Body>
                        <Card.Title>{titleApp}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Form onSubmit={this.formHandler}>
                            <Dropdown>

                                <Dropdown.Toggle variant="danger">
                                    Select Currency
                                </Dropdown.Toggle>
                                {/* Specifying eventKey to compare the currency against the selectedCurr state var. */}
                                <Dropdown.Menu>
                                    {currencySymbols.map((currency) => (
                                        <Dropdown.Item
                                            id="currencySymb0l"
                                            key={'c' + currency.id}
                                            eventKey={currency.id}
                                            onSelect={(eventKey) => {
                                                {/* Sets  state to selected option.*/
                                                }
                                                this.setState({
                                                    selectedCurr: eventKey,
                                                })

                                            }}
                                        >
                                            <p> {currency.id} </p>
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>

                                {selectedCurrency && (
                                    <>
                                        <p>Todays rate: {selectedCurrency.id} {selectedCurrency.rate} per €1</p>
                                        <p>
                                       €{this.state.currVal} will get you {selectedCurrency.id}{ selectedCurrency.rate * this.state.currVal }
                                        </p>
                                    </>

                                )}

                            </Dropdown>

                            <Form.Label>Currency </Form.Label>
                            <FormControl id={"inputCurr"} placeholder="Enter value to convert " onChange={this.handleSubmission}>

                            </FormControl>
                            <Button

                                variant="danger"
                                size="md"
                                id="convertClick"
                                type="submit"
                            >
                                Convert
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Conversion