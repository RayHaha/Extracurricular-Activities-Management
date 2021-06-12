import React from 'react';

const ProgramItem = props => {
    const { program } = props;
    const StartDate = program.StartDate.substring(0, 10);
    const EndDate = program.EndDate.substring(0, 10);

    let events = [];
    if(program.ProgramEvents){
        events = program.ProgramEvents.split("|");
    }

    return (
        <div className="item">
            <div className="content">
                <div className="ui grid">
                    <div className="four wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Name
                            </div>
                            <div className="ui basic label">
                                {program.Name}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Abbreviation
                            </div>
                            <div className="ui basic label">
                                {program.Abbreviation}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Type
                            </div>
                            <div className="ui basic label">
                                {program.Type}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                School Year
                            </div>
                            <div className="ui basic label">
                                {program.SchoolYear}
                            </div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Director
                            </div>
                            <div className="ui basic label">
                                {program.Director}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Start Date
                            </div>
                            <div className="ui basic label">
                                {StartDate}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                End Date
                            </div>
                            <div className="ui basic label">
                                {EndDate}
                            </div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Manager
                            </div>
                            <div className="ui basic label">
                                {program.Manager}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                Duration Expectation (hour)
                            </div>
                            <div className="ui basic label">
                                {program.Duration}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui grey basic label">
                                School Level Recommendation
                            </div>
                            <div className="ui basic label">
                                {program.Recommandation_Level}
                            </div>
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui grey basic label">
                            Events
                        </div>
                        <div className="ui list">
                        </div>
                        {events.length>0 ? events.map(e =><div className="item" key={e}><div className="ui basic label">{e}</div></div>) : <div className="ui basic label">No Event</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramItem;