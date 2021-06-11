import React, { useState } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';
import backend from '../../../api/backend';

const AdminProgram = props => {
    const { programs } = props;
    console.log(programs);
    // const [programs, setPrograms] = useState([]);

    // const getPrograms = async () => {
    //     const response = await backend.get('/program');
    //     setPrograms(response.data);
    // }

    // const programsInit = [
    //     {
    //         Name: "Basketball",
    //         Abbreviation: "B",
    //         Type: "Sport",
    //         Level: "High",
    //         Duration: 20,
    //         StartDate: new Date(),
    //         EndDate: new Date(),
    //         Director: "Ray",
    //         Manager: "Ray",
    //         SchoolYear: 2000
    //     },
    //     {
    //         Name: "Baseball",
    //         Abbreviation: "Ba",
    //         Type: "Sport",
    //         Level: "High",
    //         Duration: 20,
    //         StartDate: new Date(),
    //         EndDate: new Date(),
    //         Director: "Ray",
    //         Manager: "Ray",
    //         SchoolYear: 2000
    //     }
    // ];
    
    // const [programs, setPrograms] = useState(programsInit);
    const [showPopUp, setShowPopUp] = useState(false);

    const openPopup = () => {
        setShowPopUp(true);
    }
    
    const closePopup = (program) => {
        setShowPopUp(false);
        if(program.Name){
            programs.push(program);

            //TODO: post to database
            const response = backend.post('/program', program).then(res => {
                console.log(res);
            });
        }
    }

    if(programs.length<1){
        return (
            <div>Loading</div>
        );
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