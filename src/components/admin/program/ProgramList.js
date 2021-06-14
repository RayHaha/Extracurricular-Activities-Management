import React, { useState } from 'react';
import ProgramItem from './ProgramItem';
import ProgramCreate from './ProgramCreate';
import backend from '../../../api/backend';

const ProgramList = props => {
    const [showPopUpProgram, setShowPopUpProgram] = useState(false);
    const [programOnEdit, setProgramOnEdit] = useState({});

    // open the popup window to edit the program
    const openPopupProgram = program => {
        setProgramOnEdit(program);
        setShowPopUpProgram(true);
    }

    // close the popup and update the data
    const closePopupProgram = program => {
        setShowPopUpProgram(false);

        if (program.Name) {
            backend.put('/admin/program', program).then(res => {
                if (res.status !== 200){
                    console.log(res);
                }else{
                    // get tge updated data from the database
                    props.getPrograms();
                }
            });
        }

    }

    // map the array of programs then use ProgramItem to render them
    const programs = props.programs.map(program => {
        return (
            <div key={program.ID}>
                <button className="ui blue basic button" onClick={() => openPopupProgram(program)}>Edit Program</button>
                <ProgramItem key={program.ID} program={program} />
            </div>
        );
    });

    return (
        <div className="ui relaxed divided list">
            {programs}
            {showPopUpProgram ? <ProgramCreate closePopupProgram={closePopupProgram} programOnEdit={programOnEdit} /> : null}
        </div>
    );
}

export default ProgramList;