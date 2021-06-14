import React, { useState, useEffect } from 'react';
import '../../../style/PopupCreate.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormErrorList from '../../shared/FormErrorList';
import Select from 'react-select';

// the component to create or edit program
const ProgramCreate = props => {

    // the parameters of the program
    const [Name, setName] = useState("");
    const [Abbreviation, setAbbreviation] = useState("");
    const [Type, setType] = useState("Sport");
    const [Recommandation_Level, setRecommandation_Level] = useState("Elementary");
    const [Manager, setManager] = useState([]);
    const [Director, setDirector] = useState("Ray");
    const [StartDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    const [SchoolYear, setSchoolYear] = useState(new Date().getFullYear());
    const [Duration, setDuration] = useState("");

    // the parameters to show and handle the validation of the form
    const [formValid, setFormValid] = useState(true);
    const [nameValid, setNameValid] = useState("");
    const [abbreviationValid, setAbbreviationValid] = useState("");
    const [durationValid, setDurationValid] = useState("");
    const [managerValid, setManagerValid] = useState("");
    const [dateValid, setDateValid] = useState("");
    const [errorMessageList, setErrorMessageList] = useState([]);

    // manager list 
    const managerList = [
        {
            value: "Ray",
            label: "Ray"
        },
        {
            value: "Ken",
            label: "Ken"
        },
        {
            value: "Amy",
            label: "Amy"
        }
    ];

    // if the component is opened by edit side, set the default value
    useEffect(() => {
        if(props.programOnEdit){
            setName(props.programOnEdit.Name);
            setAbbreviation(props.programOnEdit.Abbreviation);
            setType(props.programOnEdit.Type);
            setRecommandation_Level(props.programOnEdit.Recommandation_Level);
            let m = props.programOnEdit.Manager.split("|");
            setManager(m);
            setDirector(props.programOnEdit.Director);
            setStartDate(new Date(props.programOnEdit.StartDate));
            setEndDate(new Date(props.programOnEdit.EndDate));
            setSchoolYear(props.programOnEdit.SchoolYear);
            setDuration(props.programOnEdit.Duration);
        }
    }, [props.programOnEdit]);

    // check the validation and set the error list
    let valid = true;
    let errorList = [];

    const checkValid = () => {
        errorList = [];
        setFormValid(true);

        // check the validation of Name
        if (Name === "") {
            valid = false;
            setNameValid("error");
            setFormValid(false);
            errorList.push("Name is required.");
        }else{
            setNameValid("");
        }

        // check the validation of Abbreviation
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

        // check the validation of Duration
        if (Duration <= 0) {
            valid = false;
            setDurationValid("error");
            setFormValid(false);
            errorList.push("Duration expectation need to be more than 0 hour");
        }else{
            setDurationValid("");
        }

        // check the validation of Date
        if(StartDate.getTime() > EndDate.getTime()){
            valid = false;
            setDateValid("error");
            setFormValid(false);
            errorList.push("Start Date and End Date are wrong.");
        }else{
            setDateValid("");
        }

        // check the validation of Manager
        if(Manager.length<1){
            valid = false;
            setManagerValid("error");
            setFormValid(false);
            errorList.push("Manager is required");
        }else{
            setManagerValid("");
        }

        // set the error message
        setErrorMessageList(errorList);
    }

    // operations while the form is submitted
    const onFormSubmit = e => {
        e.preventDefault();

        // check the validation first
        checkValid();

        if (valid) {

            // handle the type and structure of the data
            const sDate = StartDate.getFullYear() + '-' + (StartDate.getMonth() + 1) + '-' + StartDate.getDate();
            const eDate = EndDate.getFullYear() + '-' + (EndDate.getMonth() + 1) + '-' + EndDate.getDate();
            
            // manager list is stored in database as: name1|name2|name3...
            let m = "";
            for(let i=0; i<Manager.length; i++){
                if(i===0){
                    m = Manager[i];
                }else{
                    m += "|" + Manager[i];
                }
            }

            let program = {
                Name,
                Abbreviation,
                Type,
                Recommandation_Level,
                Manager: m,
                Director,
                StartDate: sDate,
                EndDate: eDate,
                SchoolYear,
                Duration
            };

            // if the component is opened by edit side, need ID to update the record
            if(props.programOnEdit){
                program["ID"] = props.programOnEdit.ID;
            }

            // close the popup and send back the program
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
                            <input type="text" defaultValue={Name} name="Name" placeholder="Name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className={`required field ${abbreviationValid}`}>
                            <label>Abbreviation</label>
                            <input type="text" defaultValue={Abbreviation} name="Abbreviation" placeholder="Abbreviation" onChange={e => setAbbreviation(e.target.value)} />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Type</label>
                            <select className="ui fluid dropdown" defaultValue={Type} onChange={e => setType(e.target.value)}>
                                <option value="Sport">Sport</option>
                                <option value="Academic">Academic</option>
                                <option value="Art">Art</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>School Level Recommendation</label>
                            <select className="ui fluid dropdown" defaultValue={Recommandation_Level} onChange={e => setRecommandation_Level(e.target.value)}>
                                <option value="Elementary">Elementary</option>
                                <option value="Middle">Middle</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Director</label>
                            <select className="ui fluid dropdown" defaultValue={Director} onChange={e => setDirector(e.target.value)}>
                                <option value="Ray">Ray</option>
                                <option value="Ken">Ken</option>
                                <option value="Amy">Amy</option>
                            </select>
                        </div>
                        <div className={`required field ${managerValid}`}>
                            <label>Manager</label>
                            <Select
                                className="ui fluid dropdown"
                                placeholder="Select Manager"
                                options={managerList}
                                defaultValue={Manager}
                                value={managerList.filter(obj => Manager.includes(obj.value))} 
                                onChange={e => setManager(Array.isArray(e) ? e.map(x => x.value) : [])}
                                isMulti 
                                isClearable
                            />
                        </div>
                    </div>
                    <div className="fields">
                        <div className={`three wide field ${dateValid}`}>
                            <label>Start Date</label>
                            <DatePicker selected={StartDate} defaultValue={StartDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={`three wide field ${dateValid}`}>
                            <label>End Date</label>
                            <DatePicker selected={EndDate} defaultValue={EndDate} onChange={(date) => setEndDate(date)} />
                        </div>
                        <div className="three wide field">
                            <label>School Year</label>
                            <DatePicker selected={SchoolYear} defaultValue={SchoolYear} onChange={(date) => setSchoolYear(date)} showYearPicker dateFormat="yyyy" />
                        </div>
                        <div className={`seven wide field required ${durationValid}`}>
                            <label>Duration Expectation (hour)</label>
                            <input type="number" name="DurationExpectation" min="0" placeholder="0" defaultValue={Duration} onChange={e => setDuration(e.target.value)} />
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