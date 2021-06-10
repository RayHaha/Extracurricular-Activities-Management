import React from 'react';

const ProgramItem = props => {
    const { program } = props;
    const StartDate = program.StartDate.getFullYear() + '-' + (program.StartDate.getMonth() + 1) + '-' + program.StartDate.getDate();
    const EndDate = program.EndDate.getFullYear() + '-' + (program.EndDate.getMonth() + 1) + '-' + program.EndDate.getDate();

    const clickListen = () => {
        console.log("Click");
    }

    return (
        <div className="item">
            <div className="content">
                <div className="ui grid">
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui green label">
                                Name
                            </div>
                            <div className="ui basic label">
                                {program.Name}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                Abbreviation
                            </div>
                            <div className="ui basic label">
                                {program.Abbreviation}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                Type
                            </div>
                            <div className="ui basic label">
                                {program.Type}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                School Year
                            </div>
                            <div className="ui basic label">
                                {program.SchoolYear}
                            </div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui green label">
                                Director
                            </div>
                            <div className="ui basic label">
                                {program.Director}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                Start Date
                            </div>
                            <div className="ui basic label">
                                {StartDate}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                End Date
                            </div>
                            <div className="ui basic label">
                                {EndDate}
                            </div>
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="inline field">
                            <div className="ui green label">
                                Manager
                            </div>
                            <div className="ui basic label">
                                {program.Manager}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                Duration Expectation (hour)
                            </div>
                            <div className="ui basic label">
                                {program.Duration}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui green label">
                                School Level Recommendation
                            </div>
                            <div className="ui basic label">
                                {program.Level}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramItem;