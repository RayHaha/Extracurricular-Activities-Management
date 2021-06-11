import React, { useState } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';
import EventCreate from './EventCreate';
import backend from '../../../api/backend';

const AdminProgram = props => {
    const { programs } = props;

    const [showPopUpProgram, setShowPopUpProgram] = useState(false);
    const [showPopUpEvent, setShowPopUpEvent] = useState(false);
    const [programList, setProgramList] = useState([]);
    
    

    const openPopupProgram = () => {
        setShowPopUpProgram(true);
    }
    
    const closePopupProgram = (program) => {
        setShowPopUpProgram(false);
        if(program.Name){
            programs.push(program);

            backend.post('/program', program).then(res => {
                if(res.status!==200) console.log(res);
            });
        }
    }

    const openPopupEvent = () => {
        setShowPopUpEvent(true);
        let programNameList = [];
        for(let i=0; i<programs.length; i++){
            programNameList.push(programs[i].Name);
        }
        setProgramList(programNameList);
        
    }
    
    const closePopupEvent = () => {
        setShowPopUpEvent(false);
    }

    if(programs.length<1){
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <button className="ui primary button" onClick={openPopupProgram}>Create Program</button>
            <button className="ui olive button" onClick={openPopupEvent}>Create Event</button>
            <ProgramList programs={programs} />

            {showPopUpProgram ? <ProgramCreate closePopupProgram={closePopupProgram} /> : null}
            {showPopUpEvent ? <EventCreate closePopupEvent={closePopupEvent} programList={programList} /> : null}


        </div>
    );
}

export default AdminProgram;