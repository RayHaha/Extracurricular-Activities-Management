import React from 'react';
import EventItem from './EventItem';

const EventList = props => {

    const events = props.events.map(event => {
        return <EventItem key={event.ID} event={event} />;
    });

    return (
        <div className="ui relaxed divided list">{events}</div>
    );
}

export default EventList;