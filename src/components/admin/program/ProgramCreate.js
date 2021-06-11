import React, { useState } from 'react';
import './PopupCreate.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormErrorList from './FormErrorList';

const ProgramCreate = props => {
    const [Name, setName] = useState("");
    const [Abbreviation, setAbbreviation] = useState("");
    const [Type, setType] = useState("Sport");
    const [Recommandation_Level, setRecommandation_Level] = useState("Elementary");
    const [Manager, setManager] = useState("Ray");
    const [Director, setDirector] = useState("Ray");
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    const [SchoolYear, setSchoolYear] = useState(new Date().getFullYear());
    const [Duration, setDuration] = useState(0);

    const [formValid, setFormValid] = useState(true);
    const [nameValid, setNameValid] = useState("");
    const [abbreviationValid, setAbbreviationValid] = useState("");
    const [durationValid, setDurationValid] = useState("");
    const [dateValid, setDateValid] = useState("");
    const [errorMessageList, setErrorMessageList] = useState([]);

    let valid = true;
    let errorList = [];

    const checkValid = () => {
        errorList = [];
        setFormValid(true);

        if (Name === "") {
            valid = false;
            setNameValid("error");
            setFormValid(false);
            errorList.push("Name is required.");
        }else{
            setNameValid("");
        }
        if (Abbreviation === "") {
            valid = false;
            setAbbreviationValid("error");
            setFormValid(false);
            errorList.push("Abbreviation is required.");
        }else{
            const abbValid = /^[0-9a-zA-Z]+$/
            if(!abbValid.test(Abbreviation)){
                setAbbreviationValid("error");
                setFormValid(false);
                errorList.push("You can only use letter or number in Abbreviation.");
            }else{
                if(Abbreviation.length>5){
                    setAbbreviationValid("error");
                    setFormValid(false);
                    errorList.push("The length of Abbreviation should be smaller than 6.");
                }else{
                    setAbbreviationValid("");
                }
            }
        }
        if (Duration <= 0) {
            valid = false;
            setDurationValid("error");
            setFormValid(false);
            errorList.push("Duration expectation need to be more than 0 hour");
        }else{
            setDurationValid("");
        }

        if(StartDate.getTime() > EndDate.getTime()){
            valid = false;
            setDateValid("error");
            setFormValid(false);
            errorList.push("Start Date and End Date are wrong.");
        }else{
            setDateValid("");
        }

        setErrorMessageList(errorList);
    }

    const onFormSubmit = e => {
        e.preventDefault();

        checkValid();

        if (valid) {
            const sDate = StartDate.getFullYear() + '-' + (StartDate.getMonth() + 1) + '-' + StartDate.getDate();
            const eDate = EndDate.getFullYear() + '-' + (EndDate.getMonth() + 1) + '-' + EndDate.getDate();
    

            const program = {
                Name,
                Abbreviation,
                Type,
                Recommandation_Level,
                Manager,
                Director,
                StartDate: sDate,
                EndDate: eDate,
                SchoolYear,
                Duration
            };

            props.closePopupProgram(program);
        }
    }

    return (
        <div className='popup-box'>
            <div className='box'>
                <form className="ui form error" onSubmit={onFormSubmit}>
                    {formValid ? null : <FormErrorList errorMessageList={errorMessageList} />}
                    <h4 className="ui dividing header">Create Program</h4>
                    <div className="two fields">
                        <div className={`required field ${nameValid}`}>
                            <label>Name</label>
                            <input type="text" name="Name" placeholder="Name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className={`required field ${abbreviationValid}`}>
                            <label>Abbreviation</label>
                            <input type="text" name="Abbreviation" placeholder="Abbreviation" onChange={e => setAbbreviation(e.target.value)} />
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
                            <select className="ui fluid dropdown" onChange={e => setRecommandation_Level(e.target.value)}>
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
                        <div className={`three wide field ${dateValid}`}>
                            <label>Start Date</label>
                            <DatePicker selected={StartDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={`three wide field ${dateValid}`}>
                            <label>End Date</label>
                            <DatePicker selected={EndDate} onChange={(date) => setEndDate(date)} />
                        </div>
                        <div className="three wide field">
                            <label>School Year</label>
                            <DatePicker selected={SchoolYear} onChange={(date) => setSchoolYear(date)} showYearPicker dateFormat="yyyy" />
                        </div>
                        <div className={`seven wide field required ${durationValid}`}>
                            <label>Duration Expectation (hour)</label>
                            <input type="number" name="DurationExpectation" min="0" placeholder="0" onChange={e => setDuration(e.target.value)} />
                        </div>
                    </div>
                    <button className="ui red button" onClick={props.closePopupProgram}>Cancel</button>
                    <input className="ui green button" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ProgramCreate;