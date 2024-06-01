
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import { Dropdown } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export function Services() {

    let service_options = [
        { 'id': 0, 'name': "battery-maint", "text": "Battery", 'selected': false },
        { 'id': 1, 'name': "oil-maint", "text": "Oil Change", 'selected': false },
        { 'id': 2, 'name': "ac-maint", "text": "A/C Check", 'selected': false }
    ];

    function handleSelect(e) {
        if (e.target.checked) {
            console.log('event', e);
        }
    }

    function render_service_options() {
        return service_options.map(
            (item) => {
                // console.log(item.name);
                return (
                    <InputGroup className="mb-3">
                        <InputGroup.Checkbox
                            aria-describedby={item.id}
                            onChange={handleSelect}
                        />
                        <InputGroup.Text id={item.id} >
                            {item.text}
                        </InputGroup.Text>
                    </InputGroup>
                )
            }
        );
    }

    return (
        <Card className="m-2 p-0 d-print-none">
            <label
                className="m-1"
            >Service Options</label>
            <Form.Group className="text-center">
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        {render_service_options()}
                        {/* This should cover any additional request for now. */}
                        <InputGroup className="mb-3 m-0 p-0">
                            <InputGroup.Checkbox
                                // aria-describedby={item.id}
                                onChange={handleSelect}
                            />

                            {/* <FloatingLabel label="Other"> */}
                                <Form.Control placeholder="Other" />
                            {/* </FloatingLabel> */}

                        </InputGroup>

                    </ListGroup.Item>
                </ListGroup>
            </Form.Group>
        </Card>
    );
}

export function DropOff() {

    let drop_off_option = [
        "drop-off",
        "wait"
    ];

    return (
        <div
            className="m-2 ml-4"
        >
            <Form.Group
                controlId="formGridState">
                <FloatingLabel
                    controlId="floatingSelect"
                    label="Options"
                >
                    <Form.Select
                        aria-label="Floating label select"
                    >
                        {/* default value - reason for index+1 below.*/}
                        <option key={0} disabled={true} >Select Option</option>

                        {drop_off_option.map((_option, idx, arr) => {
                            console.log(idx, _option);
                            return (
                                <option
                                    key={idx + 1}
                                    value={_option}
                                > {_option} </option>
                            )
                        })}
                    </Form.Select>
                </FloatingLabel>
            </Form.Group>
        </div>
    );
}