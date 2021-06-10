import React, { useState } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';

const AdminProgram = () => {
    const programsInit = [
        {
            Name: "Basketball",
            Abbreviation: "B",
            Type: "Sport",
            Level: "high",
            Duration: 20,
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
            Level: "high",
            Duration: 20,
            StartDate: new Date(),
            EndDate: new Date(),
            Director: "Ray",
            Manager: "Ray",
            SchoolYear: 2000
        }
    ];
    
    const [programs, setPrograms] = useState(programsInit);
    const [showPopUp, setShowPopUp] = useState(false);

    const openPopup = () => {
        setShowPopUp(true);
    }
    
    const closePopup = (program) => {
        setShowPopUp(false);
        if(program.Name){
            programsInit.push(program);
            setPrograms(programsInit);
        }
    }

    return (
        <div>
            <button className="ui primary button" onClick={openPopup}>Create Program</button>
            <ProgramList programs={programs} />

            {showPopUp ? <ProgramCreate closePopup={closePopup} /> : null}


        </div>
    );
}

export default AdminProgram;