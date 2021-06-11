import './PopupCreate.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormErrorList from './FormErrorList';

const EventCreate = props => {

    const [eventName, setEventName] = useState("");
    const [programName, setProgramName] = useState(props.programList[0]);
    const [duration, setDuration] = useState(0);
    const [eventDate, setEventDate] = useState(new Date());
    const [venue, setVenue] = useState("");
    const [type, setType] = useState("");

    const [formValid, setFormValid] = useState(true);
    const [eventNameValid, setEventNameValid] = useState("");
    const [venueValid, setVenueValid] = useState("");
    const [durationValid, setDurationValid] = useState("");
    const [errorMessageList, setErrorMessageList] = useState([]);

    let valid = true;
    let errorList = [];

    const checkValid = () => {
        errorList = [];
        setFormValid(true);

        if (eventName === "") {
            valid = false;
            setEventNameValid("error");
            setFormValid(false);
            errorList.push("Event name is required.");
        } else {
            setEventNameValid("");
        }

        if (venue === "") {
            valid = false;
            setVenueValid("error");
            setFormValid(false);
            errorList.push("Venue is required.");
        } else {
            setVenueValid("");
        }

        if (duration <= 0) {
            valid = false;
            setDurationValid("error");
            setFormValid(false);
            errorList.push("Duration expectation need to be more than 0 hour");
        } else {
            setDurationValid("");
        }

        setErrorMessageList(errorList);

    }

    const onFormSubmit = e => {
        e.preventDefault();

        checkValid();
    }

    return (
        <div className='popup-box'>
            <div className='box'>
                <form className="ui form error" onSubmit={onFormSubmit}>
                    {formValid ? null : <FormErrorList errorMessageList={errorMessageList} />}
                    <h4 className="ui dividing header">Create Event</h4>
                    <div className="two fields">
                        <div className={`required field ${eventNameValid}`}>
                            <label>Event Name</label>
                            <input type="text" name="Event Name" placeholder="Event Name" onChange={e => setEventName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Program Name</label>
                            <select className="ui fluid dropdown" onChange={e => setProgramName(e.target.value)}>
                                {props.programList.map(program => <option key={program} value={program}>{program}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Event Date</label>
                            <DatePicker selected={eventDate} onChange={(date) => setEventDate(date)} />
                        </div>
                        <div className={`field required ${durationValid}`}>
                            <label>Duration Expectation (hour)</label>
                            <input type="number" name="DurationExpectation" min="0" placeholder="0" onChange={e => setDuration(e.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className={`required field ${venueValid}`}>
                            <label>Venue</label>
                            <input type="text" name="Venue" placeholder="Venue" onChange={e => setVenue(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Type</label>
                            <select className="ui fluid dropdown" onChange={e => setType(e.target.value)}>
                                <option value="Sport">Sport</option>
                                <option value="Academic">Academic</option>
                                <option value="Art">Art</option>
                            </select>
                        </div>
                    </div>
                    <button className="ui red button" onClick={props.closePopupEvent}>Cancel</button>
                    <input className="ui green button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default EventCreate;