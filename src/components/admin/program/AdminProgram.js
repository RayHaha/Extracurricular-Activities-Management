import React, { useState, useEffect } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';
import EventCreate from './EventCreate';
import backend from '../../../api/backend';

const AdminProgram = () => {

    const [showPopUpProgram, setShowPopUpProgram] = useState(false);
    const [showPopUpEvent, setShowPopUpEvent] = useState(false);
    const [programList, setProgramList] = useState([]);
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const getPrograms = async () => {
            const response = await backend.get('/program');
            setPrograms(response.data);
        }
        getPrograms();
    }, []);

    const openPopupProgram = () => {
        setShowPopUpProgram(true);
    }

    const closePopupProgram = program => {
        setShowPopUpProgram(false);
        if (program.Name) {
            let p = programs;
            p.push(program);
            setPrograms(p);

            backend.post('/program', program).then(res => {
                if (res.status !== 200) console.log(res);
            });
        }
    }

    const openPopupEvent = () => {
        setShowPopUpEvent(true);
        let programNameList = [];
        for (let i = 0; i < programs.length; i++) {
            programNameList.push(programs[i].Name);
        }
        setProgramList(programNameList);

    }

    const closePopupEvent = event => {
        setShowPopUpEvent(false);
        if (event.Name) {
            let program = programs.filter(program => program.Name === event.ProgramName);
            let programEvents = "";
            if (program.length > 0) {
                programEvents = program[0].ProgramEvents ? program[0].ProgramEvents + "|" + event.Name : event.Name ;

            }
            let eventToAdd = {
                programEvents,
                event
            }

            backend.post('/event', eventToAdd).then(res => {
                if (res.status !== 200) console.log(res);
            });
        }
    }

    if (programs.length < 1) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <button className="ui primary button" onClick={openPopupProgram}>Create Program</button>
            <button className="ui teal button" onClick={openPopupEvent}>Create Event</button>
            <ProgramList programs={programs} />

            {showPopUpProgram ? <ProgramCreate closePopupProgram={closePopupProgram} /> : null}
            {showPopUpEvent ? <EventCreate closePopupEvent={closePopupEvent} programList={programList} /> : null}


        </div>
    );
}

export default AdminProgram;