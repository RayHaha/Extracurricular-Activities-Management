import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import backend from '../../../api/backend';

const AdminStudent = () => {

    const [students, setStudents] = useState([]);   // student list
    const [studentsToShow, setStudentsToShow] = useState([]);   // student list to show after filter
    const [levelChecked, setLevelChecked] = useState([1, 1, 1]);    // filter: [elementary, middle, high]
    const [eventRecords, setEventRecords] = useState([]); // the event record list to show some information between event and student

    // fetch the data from backend
    useEffect(() => {
        const getStudents = async () => {
            const response = await backend.get('/admin/student');
            setStudents(response.data);
            setStudentsToShow(response.data);
        }
        getStudents();

        const getRecords = async () => {
            const response = await backend.get('/admin/event_record');
            setEventRecords(response.data);
        }
        getRecords();

    }, []);

    // while clicking on the checkbox, change the value of the filter
    const LevelChange = (level, checked) => {
        let l = levelChecked;
        l[level] = checked ? 1 : 0;
        CollectList(l);
    }

    // decide the student list to show base on the filter
    const CollectList = level => {
        let sList = [];
        for (let i = 0; i < level.length; i++) {
            if (i === 0 && level[i] === 1) {
                let l = students.filter(s => s.Grade === "Elementary");
                sList = [...sList, ...l];
            }
            if (i === 1 && level[i] === 1) {
                let l = students.filter(s => s.Grade === "Middle");
                sList = [...sList, ...l];
            }
            if (i === 2 && level[i] === 1) {
                let l = students.filter(s => s.Grade === "High");
                sList = [...sList, ...l];
            }
        }
        setStudentsToShow(sList);
        setLevelChecked(level);
    }


    return (
        <div>
            <div className="ui horizontal list">
                <div className="item">
                    <div className="inline field">
                        <div className="ui toggle checkbox">
                            <input type="checkbox" defaultChecked={true} onChange={e => LevelChange(0, e.target.checked)} />
                            <label>Elementary</label>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="inline field">
                        <div className="ui toggle checkbox">
                            <input type="checkbox" defaultChecked={true} onChange={e => LevelChange(1, e.target.checked)} />
                            <label>Middle</label>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="inline field">
                        <div className="ui toggle checkbox">
                            <input type="checkbox" defaultChecked={true} onChange={e => LevelChange(2, e.target.checked)} />
                            <label>High</label>
                        </div>
                    </div>
                </div>
            </div>
            <StudentList students={studentsToShow} eventRecords={eventRecords}/>
        </div>
    );
}

export default AdminStudent;