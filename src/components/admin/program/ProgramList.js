import React, { useState } from 'react';
import ProgramItem from './ProgramItem';
import ProgramCreate from './ProgramCreate';
import backend from '../../../api/backend';

const ProgramList = props => {
    const [showPopUpProgram, setShowPopUpProgram] = useState(false);
    const [programOnEdit, setProgramOnEdit] = useState({});

    const openPopupProgram = program => {
        setProgramOnEdit(program);
        setShowPopUpProgram(true);
    }

    const closePopupProgram = program => {
        setShowPopUpProgram(false);

        if (program.Name) {
            backend.put('/admin/program', program).then(res => {
                if (res.status !== 200){
                    console.log(res);
                }else{
                    
                }
            });
        }
    }

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