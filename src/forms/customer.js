import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

let STATES = ["Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

export function CustomerInfo() {

    return (
        <Card className='m-2 mb-0 p-2 pb-1'>
            <label>
                Contact Information
            </label>
            <div
                className='m-2'
            >
                <Row className="mb-2">

                    <Form.Group as={Col} controlId="formGridFirstName">
                        <FloatingLabel label="First Name">
                            <Form.Control placeholder="Enter first name" />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <FloatingLabel label="Last Name">
                            <Form.Control placeholder="Enter last name" />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-2" controlId="formGridAddress1">
                    <FloatingLabel label="Address">
                        <Form.Control placeholder="1234 Main St" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formGridAddress2">
                    <FloatingLabel label="Address 2">
                        <Form.Control placeholder="Apartment, studio, or floor#" />
                    </FloatingLabel>
                </Form.Group>

                <Row className="mb-0">
                    <Form.Group as={Col} controlId="formGridState">
                        <FloatingLabel controlId="floatingSelect" label="State">
                            {/* <Form.Label>State</Form.Label> */}
                            <Form.Select aria-label="Floating label select">State...
                                <option key={0}>Select State</option>
                                {
                                    STATES.map((state, idx, arr) => {
                                        return (
                                            <option key={idx + 1}>{state}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <FloatingLabel label="City">
                            <Form.Control placeholder='City' />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <FloatingLabel label="Zip">
                            <Form.Control placeholder='Zip' />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
            </div>
        </Card>
    );
}
