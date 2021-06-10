import React from 'react';

const ProgramItem = props => {
    const { program } = props;
    const StartDate = program.StartDate.getFullYear() + '-' + (program.StartDate.getMonth() + 1) + '-' + program.StartDate.getDate();
    const EndDate = program.EndDate.getFullYear() + '-' + (program.EndDate.getMonth() + 1) + '-' + program.EndDate.getDate();

    return (
        <div className="item">
            <div className="content">
                <div className="ui grid">
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Name
                            </div>
                            <div className="ui basic label">
                                {program.Name}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Abbreviation
                            </div>
                            <div className="ui basic label">
                                {program.Abbreviation}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Type
                            </div>
                            <div className="ui basic label">
                                {program.Type}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                School Level Recommendation
                            </div>
                            <div className="ui basic label">
                                {program.SchoolLevelRecommendation}
                            </div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Duration Expectation (hour)
                            </div>
                            <div className="ui basic label">
                                {program.DurationExpectation}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Start Date
                            </div>
                            <div className="ui basic label">
                                {StartDate}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                End Date
                            </div>
                            <div className="ui basic label">
                                {EndDate}
                            </div>
                        </div>
                    </div>
                    <div className="six wide column">
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Director
                            </div>
                            <div className="ui basic label">
                                {program.Director}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                Manager
                            </div>
                            <div className="ui basic label">
                                {program.Manager}
                            </div>
                        </div>
                        <div className="inline field">
                            <div className="ui right pointing green basic label">
                                School Year
                            </div>
                            <div className="ui basic label">
                                {program.SchoolYear}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramItem;