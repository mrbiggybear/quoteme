
import { version } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {customer} from './forms/customer_info'

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
    function onChange(e) {
        // on date change get availability for selected date
        console.log("date changed. : ", e, e.getMonth(), e.getDay(), e.getDate());
    }

    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    let in5Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
    let in30Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
    
    function isSameDay (date_1, date_2) {
        if (date_1 === date_2){
            console.log('date 1: ', date_1, 'date 2: ', date_2)
            return true;
        }
    }

    const disabledDates = [today, tomorrow, in5Days, in30Days];

    function tileDisabled({ date, view }) {
        // console.log('date: ', date, 'veiw: ', view)
        // console.log('disabledDates: ', disabledDates)
        // Disable tiles in month view only
        if (view === 'month') {
            // Check if a date React-Calendar wants to check is on the list of disabled dates
            return disabledDates.find(dDate => isSameDay(dDate, date));
        }
    }

    let items = [
        {'id': 0, 'name': "Battery", 'selected': false},
        {'id': 1, 'name': "Oil Change", 'selected': false},
        {'id': 2, 'name': "A/C Check", 'selected': false}
    ];
    let drop_off_option = [
        "drop-off",
        "wait"
    ];

    function render_service_options() {
        return items.map(
            (item)=>{
                console.log(item.name);
                return <p>{item.name}
                    <input 
                        key={item.id}
                        type='checkbox'
                        name={item.name}
                        // defaultChecked={false}
                    ></input>
                </p>
            }
        );
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            {/* Available service options. */}
            <label>
                {render_service_options()}
            </label>
            <button type="selected-service-submit">Continue</button>
            <hr />
            <label>
                Dropping off or waiting?
                <br/>
                <select name="drop-off-options">
                    {drop_off_option.map((option, idx) => 
                        <option key={idx} value={option}>{option}</option>
                    )}
                </select>
            </label>
            <br/>
            <button type="drop-off-submit">Continue</button>
            <hr />
            {/* <p>
                Radio buttons:
                <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
                <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
                <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
            </p> */}
            {/* Allow date selection on completion of the above form feilds. */}
            <div>
                <Calendar
                    onChange={onChange}
                    // value={today}
                    tileDisabled={tileDisabled}
                />
            </div>
            <hr />
            {/* customer information iput form. */}
            <label>
                Contact information: 
                {/* <br/> */}
                {/* Name: <input name="customer-name" defaultValue="John Doe" /> */}
                {/* <br/> */}
                {/* Address: <input name="customer-address" defaultValue="" /> */}
                <br/>
                Phone Number: <input name="customer-numbers" defaultValue="(000) 000-0000" />
                <br/>
                Email: <input name="customer-numbers" defaultValue="customer@quoteme.io" />
            </label>
            <br/>
            <button type="contact-info-submit">Continue</button>
            <hr />
            <br/>
            Note: <input name="customer-note" defaultValue="Additional Information" />
            <br/>
            <br/>
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
        </form >
    );
}
