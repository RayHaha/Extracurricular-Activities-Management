import React from 'react';

const StudentItem = props => {
    const { student, records } = props;

    let programs = [];
    if (student.ProgramName) {
        programs = student.ProgramName.split("|");
    }

    const EventCheck = props => {
        const { program } = props;
        if(program.Completed === 1){
            return <div className="ui green basic label" key={program.EventName}>{program.EventName}({program.Duration})</div>;
        }
        return <div className="ui red basic label" key={program.EventName}>{program.EventName}({program.Duration})</div>;
    }

    const EventList = props => {
        if(records.length > 0){
            let events = records.filter(r => r.ProgramName === props.program);
            return events.map(e => (
                <EventCheck program={e} key={e.EventName} />
            ));
        }
        return <div className="ui basic label">No Event</div>;
    }

    const ProgramsList = () => {
        if (programs.length > 0) {
            return programs.map(p => (
                <div className="field" key={p}>
                    <div className="inline field">
                        <div className="ui brown basic label">{p}</div>
                        <EventList program={p} />
                    </div>
                </div>
            ));
        }
        return <div className="ui basic label">No Program</div>;
    }

    return (
        <div>
            <div className="item">
                <div className="content">
                    <div className="ui grid">
                        <div className="sixteen wide column">
                            <div className="ui horizontal list">
                                <div className="item">
                                    <div className="inline field">
                                        <div className="ui grey basic label">
                                            Name
                                        </div>
                                        <div className="ui basic label">
                                            {student.Name}
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="inline field">
                                        <div className="ui grey basic label">
                                            Grade
                                        </div>
                                        <div className="ui basic label">
                                            {student.Grade}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="sixteen wide column">
                                    <div className="field">
                                        <div className="ui grey basic label">Programs</div>
                                    </div>
                                    <ProgramsList />
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default StudentItem;