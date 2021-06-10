import React, { useState } from 'react';
import PopUp from '../../shared/PopUp';
import ProgramList from './ProgramList';

const AdminProgram = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopup = () => {
        setShowPopUp(!showPopUp);
    }

    const programs = [
        {
            Name: "Basketball",
            Abbreviation: "B",
            Type: "Sport",
            SchoolLevelRecommendation: "high",
            DurationExpectation: 20,
            StartDate: new Date(),
            EndDate: new Date(),
            Director: "Ray",
            Manager: "Ray",
            SchoolYear: 2000
        },
        {
            Name: "Baseball",
            Abbreviation: "Ba",
            Type: "Sport",
            SchoolLevelRecommendation: "high",
            DurationExpectation: 20,
            StartDate: new Date(),
            EndDate: new Date(),
            Director: "Ray",
            Manager: "Ray",
            SchoolYear: 2000
        }
    ];

    return (
        <div>
            <button className="ui primary basic button" onClick={() => togglePopup()}>Create Program</button>
            
            {showPopUp ? <PopUp text='Close Me' closePopup={() => togglePopup()} /> : null}

            <ProgramList programs={programs} />

        </div>
    );
}

export default AdminProgram;