import React from 'react';

const EventItem = props => {
    const { event } = props;
    const EventDate = event.EventDate.substring(0, 10);


    return (
        <div className="item">
            <div className="content">
                <div className="ui grid">
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Name
                            </div>
                            <div className="ui basic label">
                                {event.Name}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Program Name
                            </div>
                            <div className="ui basic label">
                                {event.ProgramName}
                            </div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Duration Expectation (hour)
                            </div>
                            <div className="ui basic label">
                                {event.Duration}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Event Date
                            </div>
                            <div className="ui basic label">
                                {EventDate}
                            </div>
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Type
                            </div>
                            <div className="ui basic label">
                                {event.Type}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Venue
                            </div>
                            <div className="ui basic label">
                                {event.Venue}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventItem;