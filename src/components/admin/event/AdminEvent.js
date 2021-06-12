import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import backend from '../../../api/backend';
import EventCreate from './EventCreate';

const AdminEvent = () => {

    const [showPopUpEvent, setShowPopUpEvent] = useState(false);
    const [events, setEvents] = useState([]);
    const [programList, setProgramList] = useState([]);
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const response = await backend.get('/event');
            setEvents(response.data);
        }
        getEvents();

        const getPrograms = async () => {
            const response = await backend.get('/program');
            setPrograms(response.data);
        }
        getPrograms();
    }, []);

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
                programEvents = program[0].ProgramEvents ? program[0].ProgramEvents + "|" + event.Name : event.Name;

            }
            let eventToAdd = {
                programEvents,
                event
            }

            let e = events;
            e.push(event);
            setEvents(e);

            backend.post('/event', eventToAdd).then(res => {
                if (res.status !== 200) console.log(res);
            });
        }
    }

    if (events.length < 1) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <button className="ui teal button" onClick={openPopupEvent}>Create Event</button>
            <EventList events={events} />

            {showPopUpEvent ? <EventCreate closePopupEvent={closePopupEvent} programList={programList} /> : null}

        </div>
    );
}

export default AdminEvent;