
import { version } from 'react';

import {CustomerInfo} from './forms/customer.js'
import {Scheduling} from './forms/scheduler.js'
import {Services, DropOff} from './forms/services.js'

export default function Quote() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            {/* Available service options and drop off. */}
            <hr />
            <Services/>
            <DropOff/>
            <hr />
            {/* Allow date selection on completion of the above form feilds. */}
            <Scheduling/>
            <br/>
            Selected day slot list show populate here.
            <hr />
            {/* customer information iput form. */}
            <CustomerInfo/>
            <br/>
            {/* button controls */}
            <button type="reset">Reset form</button> {/* prompt user before clearing content */}
            <button type="submit">Submit form</button> {/* should provide pop-up summary to user. */}
        </form >
    );
}
