import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import backend from '../../../api/backend';

const AdminStudent = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const response = await backend.get('/admin/student');
            setStudents(response.data);
        }
        getStudents();
        
    }, []);



    return (
        <div>
            <StudentList students={students} />
        </div>
    );
}

export default AdminStudent;