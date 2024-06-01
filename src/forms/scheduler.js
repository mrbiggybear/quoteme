
import Card from 'react-bootstrap/Card';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function Scheduling(props) {

    const JobList = ["Job1", "Job2", "Job3", "Job4"];
    function onChange(e) {
        // ToDo(bj): on date change get availability for selected date from gmail ('iam') calendar
        props.setDate(() => {
            console.log("date changed. : ", e, e.getMonth(), e.getDay(), e.getDate());
            return new Date(e.getFullYear(), e.getMonth(), e.getDate());
        });
    }

    // ToDo(bj): Reomve after back-end logic is set.
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    let in5Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)
    let in30Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

    const disabledDates = [today, tomorrow, in5Days, in30Days];

    // ToDo(bj): I'm sure the disabled dates are not correct
    function tileDisabled({ activeStartDate, date, view }) {
        // Disable tiles in month view only
        if (view === 'month') {
            // Is selected date disabled?
            return disabledDates.find(dDate => {
                // console.log('activeStartDate:', activeStartDate, 'date: ', date, 'veiw: ', view);
                // console.log(`${dDate.getDate()} === ${date.getDate()}`, (dDate.getDate() === date.getDate()));
                return dDate.getDate() === date.getDate();
            });
        }
    }

    function selectJob(job) {
        console.log("Selected: ", job.target.innerText);
    }

    return (

        <Card className='m-2 p-2'>
            <label>Scheduler</label>
            <div
                className="p-2 d-flex"
            >
                {/* ToDo(bj): a size limit should be placed on Calendar */}
                <div>
                    <Calendar
                        value={props.date}
                        onChange={onChange}
                        // value={today}
                        tileDisabled={tileDisabled}
                        className="m-0"
                    />
                </div>
                <div
                    className='pl-3 d-flex-column w-100'
                    id="schedule-list"
                    name="avalibilities"
                >
                    {/* List of available times here.. */}
                    {
                        JobList.map((job) => {
                            return (
                                <Card
                                    className="p-1 m-2 mt-0 mr-0"
                                    onClick={selectJob}
                                >
                                    {job}
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </Card >

    );
}