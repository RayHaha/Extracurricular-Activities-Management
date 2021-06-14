import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import backend from '../../../api/backend';
import EventCreate from './EventCreate';

const AdminEvent = () => {

    const [showPopUpEvent, setShowPopUpEvent] = useState(false);    // show popup or not
    const [events, setEvents] = useState([]);   // event list
    const [programList, setProgramList] = useState([]); // program list to show in the EventCreate component
    const [programs, setPrograms] = useState([]);   // get the programs to get the name

    // fetch the data from backend
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

    // open the popup window to create event
    const openPopupEvent = () => {
        setShowPopUpEvent(true);
        let programNameList = [];
        for (let i = 0; i < programs.length; i++) {
            programNameList.push(programs[i].Name);
        }
        setProgramList(programNameList);

    }

    // close the popup window then store the data into database
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

    return (
        <div>
            <button className="ui teal button" onClick={openPopupEvent}>Create Event</button>
            <EventList events={events} />

            {showPopUpEvent ? <EventCreate closePopupEvent={closePopupEvent} programList={programList} /> : null}

        </div>
    );
}

export default AdminEvent;