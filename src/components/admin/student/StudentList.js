import React from 'react';
import StudentItem from './StudentItem';

const StudentList = props => {

    // map the array of student and filter the event records then use StudentItem to render them
    const events = props.students.map(student => {
        let records = props.eventRecords.filter(record => record.StudentName === student.Name);
        return <StudentItem key={student.Name} student={student} records={records} />;
    });

    return (
        <div className="ui relaxed divided list">{events}</div>
    );
}

export default StudentList;