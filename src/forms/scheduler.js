import { useState } from "react";

import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function Scheduling() {
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

    return (<div>
        <Calendar
            onChange={onChange}
            // value={today}
            tileDisabled={tileDisabled}
        />
    </div>
    );
}