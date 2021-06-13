import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import backend from '../../../api/backend';
import EventCreate from './EventCreate';

const AdminEvent = () => {

    const [showPopUpEvent, setShowPopUpEvent] = useState(false);
    const [events, setEvents] = useState([]);
    const [programList, setProgramList] = useState([]);
    const [programs, setPrograms] = useState([]);

    const getEvents = async () => {
        const response = await backend.get('/admin/event');
        setEvents(response.data);
    }

    const getPrograms = async () => {
        const response = await backend.get('/admin/program');
        setPrograms(response.data);
    }

    useEffect(() => {
        getEvents();
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
            let eventToAdd = {
                Name: event.Name,
                Duration: event.Duration,
                EventDate: event.EventDate,
                Type: event.Type,
                Venue: event.Venue
            }
            let post = {
                programName: event.ProgramName,
                eventToAdd
            }

            backend.post('/admin/event', post).then(res => {
                if (res.status !== 200){
                    console.log(res)
                };
                getEvents();
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