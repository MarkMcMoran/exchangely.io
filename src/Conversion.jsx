import React from 'react'
import {Button, Card, Container, Dropdown, FormControl} from 'react-bootstrap'
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
        }
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    handleSubmission = (event) => {
        alert(`Currency symbol is ${this.state.selectedCurr}`)
        event.preventDefault()
    }
    handleCalc = (event) => {

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
                                <p>Selected currency: {selectedCurrency.id} </p>
                            )}
                        </Dropdown>


                    <FormControl>
                        </FormControl>
                        <Button
                            onClick={this.handleCalc}
                            variant="danger"
                            size="sm"
                            id="convertClick"
                        >
                            Convert
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Conversion