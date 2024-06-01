
import { version, useState, useEffect } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CustomerInfo } from './forms/customer.js'
import { Scheduling } from './forms/scheduler.js'
import { Services, DropOff } from './forms/services.js'
import Alert from 'react-bootstrap/Alert';
// import './App.css';

export default function Quote() {

    // useEffect(()=>{},[]);

    let [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        // console.log('form', form);

        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // get form field data
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        // get calendar data.
        formJson["date"] = date;


        // Or you can work with it as a plain object:
        console.log('json', formJson);
    }

    function handleReset() {
        console.log("Reset?");

        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Rest Form?</Alert.Heading>
                <p>
                    All form data will be erased.
                    <br />
                    Continue?
                </p>
            </Alert>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <Tabs
                    defaultActiveKey="#"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Quote Me!">
                        {/* Tab content for Home */}
                        <Form method="post" onSubmit={handleSubmit}>
                            <div>
                                {/* Available service options and drop off. */}
                                <Services />
                                <DropOff />
                                {/* Allow date selection on completion of the above form feilds. */}
                                <Scheduling date={date} setDate={setDate} />
                                {/* customer information iput form. */}
                                <CustomerInfo
                                    name=""
                                    email=""
                                />
                                <br />
                                {/* button controls */}
                                {/* prompt user before clearing content */}
                                <div className='m-2 d-flex' id_='message'>
                                    <>
                                        <Alert show={show} variant="danger" className='w-100'>
                                            <Alert.Heading>Form Reset</Alert.Heading>
                                            <div>
                                                You are about to erase all form data.
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-end">
                                                <Button
                                                    onClick={() => setShow(false)}
                                                    variant="outline-none"
                                                >
                                                    Close me
                                                </Button>
                                                <Button
                                                    onClick={() => setShow(false)}
                                                    variant="outline-danger"
                                                >
                                                    Continue?
                                                </Button>
                                            </div>
                                        </Alert>
                                        {!show &&
                                            <>
                                                <Button
                                                    variant="link"
                                                    onClick={() => setShow(true)}>
                                                    Reset
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </>
                                        }
                                    </>
                                </div>
                            </div>
                        </Form >

                    </Tab>
                    {/* 
                    <Tab eventKey="contact" title="Contact" disabled>
                        Tab content for Contact
                    </Tab> 
                    */}
                    <Tab eventKey="profile" title="Profile">
                        Tab content for Profile
                    </Tab>
                </Tabs>
            </header>
        </div>
    );
}
