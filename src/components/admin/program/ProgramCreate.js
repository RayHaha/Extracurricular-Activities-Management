import React, { useState } from 'react';
import './ProgramCreate.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ProgramCreate = props => {
    const [Name, setName] = useState("");
    const [Abbreviation, setAbbreviation] = useState("");
    const [Type, setType] = useState("Sport");
    const [Level, setLevel] = useState("Elementary");
    const [Manager, setManager] = useState("Ray");
    const [Director, setDirector] = useState("Ray");
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    const [SchoolYear, setSchoolYear] = useState(new Date().getFullYear());
    const [Duration, setDuration] = useState(0);

    const onFormSubmit = e => {
        e.preventDefault();
        
        const program = {
            Name,
            Abbreviation,
            Type,
            Level,
            Manager,
            Director,
            StartDate,
            EndDate,
            SchoolYear,
            Duration
        };

        props.closePopup(program);
    }

    return (
        <div className='popup-box'>
            <div className='box'>
                <form className="ui form" onSubmit={onFormSubmit}>
                    <h4 className="ui dividing header">Create Program</h4>
                    <div className="two fields">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="Name" placeholder="name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Abbreviation</label>
                            <input type="text" name="Abbreviation" placeholder="Abbreviation" onChange={e => setAbbreviation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Type</label>
                            <select className="ui fluid dropdown" onChange={e => setType(e.target.value)}>
                                <option value="Sport">Sport</option>
                                <option value="Academic">Academic</option>
                                <option value="Art">Art</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>School Level Recommendation</label>
                            <select className="ui fluid dropdown" onChange={e => setLevel(e.target.value)}>
                                <option value="Elementary">Elementary</option>
                                <option value="Middle">Middle</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Director</label>
                            <select className="ui fluid dropdown" onChange={e => setDirector(e.target.value)}>
                                <option value="Ray">Ray</option>
                                <option value="Ken">Ken</option>
                                <option value="Amy">Amy</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Manager</label>
                            <select className="ui fluid dropdown" onChange={e => setManager(e.target.value)}>
                                <option value="Ray">Ray</option>
                                <option value="Ken">Ken</option>
                                <option value="Amy">Amy</option>
                            </select>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="three wide field">
                            <label>Start Date</label>
                            <DatePicker selected={StartDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="three wide field">
                            <label>End Date</label>
                            <DatePicker selected={EndDate} onChange={(date) => setEndDate(date)} />
                        </div>
                        <div className="three wide field">
                            <label>School Year</label>
                            <DatePicker selected={SchoolYear} onChange={(date) => setSchoolYear(date)} showYearPicker dateFormat="yyyy" />
                        </div>
                        <div className="seven wide field">
                            <label>Duration Expectation (hour)</label>
                            <input type="number" name="DurationExpectation" placeholder="0" onChange={e => setDuration(e.target.value)}/>
                        </div>
                    </div>
                    <button className="ui red basic button" onClick={props.closePopup}>Cancel</button>
                    <input className="ui green basic button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ProgramCreate;