import React, { useState, useEffect } from 'react';
import StudentItem from './StudentItem';
import backend from '../../../api/backend';

const StudentList = props => {

    const [eventRecords, setEventRecords] = useState([]);

    useEffect(() => {
        const getRecords = async () => {
            const response = await backend.get('/admin/event_record');
            setEventRecords(response.data);
        }
        getRecords();
        
    }, []);

    const events = props.students.map(student => {
        let records = eventRecords.filter(record => record.StudentName === student.Name);
        return <StudentItem key={student.Name} student={student} records={records} />;
    });

    return (
        <div className="ui relaxed divided list">{events}</div>
    );
}

export default StudentList;