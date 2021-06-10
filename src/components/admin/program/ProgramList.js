import React from 'react';
import ProgramItem from './ProgramItem';

const ProgramList = props => {

    const programs = props.programs.map(program => {
        return <ProgramItem key={program.Name} program={program} />;
    });

    return (
        <div className="ui relaxed divided list">{programs}</div>
    );
}

export default ProgramList;