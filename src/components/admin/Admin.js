import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminProgram from './program/AdminProgram';
import AdminStudent from './student/AdminStudent';
import backend from '../../api/backend';

const Admin = () => {
    const[catelog, setCatelog] = useState("Program");
    const[programs, setPrograms] = useState([]);

    const getPrograms = async () => {
        const response = await backend.get('/program');
        setPrograms(response.data);
    }

    const onCatelogClick = (catelog) => {
        setCatelog(catelog);
        if(catelog==="Program"){
            getPrograms();
        }
    }

    let route;
    if(catelog==="Program"){
        route = <AdminProgram programs={programs} />;
    }else{
        route = <AdminStudent />;
    }
    let notificationNumber = 0;

    return (
        <div>
            <div className="ui secondary pointing menu">
                <button className="ui orange button" onClick={() => onCatelogClick("Program")}>Program</button>
                <button className="ui secondary button" onClick={() => onCatelogClick("Student")}>Student</button>
                <button className="ui purple button">Notification({notificationNumber})</button>
                <div className="right menu">
                    <button className="ui primary basic button"><Link to="/">Logout</Link></button>
                </div>
            </div>
            <div className="ui container">
                {route}
            </div>
        </div>
    );
}

export default Admin;