import React from 'react';
import EventItem from './EventItem';

const EventList = props => {

    const events = props.events.map(event => {
        let key = event.Name + event.ProgramName
        return <EventItem key={key} event={event} />;
    });

    return (
        <div className="ui relaxed divided list">{events}</div>
    );
}

export default EventList;