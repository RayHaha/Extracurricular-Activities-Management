import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminProgram from './program/AdminProgram';
import AdminStudent from './student/AdminStudent';
import AdminEvent from './event/AdminEvent';

const Admin = () => {
    const[catelog, setCatelog] = useState("Program");

    const onCatelogClick = (catelog) => {
        setCatelog(catelog);
    }

    let route;
    if(catelog==="Program"){
        route = <AdminProgram />;
    }else if(catelog==="Student"){
        route = <AdminStudent />;
    }else{
        route = <AdminEvent />;
    }
    let notificationNumber = 0;

    return (
        <div>
            <div className="ui secondary pointing menu">
                <button className="ui black button" onClick={() => onCatelogClick("Program")}>Program</button>
                <button className="ui grey button" onClick={() => onCatelogClick("Student")}>Student</button>
                <button className="ui brown button" onClick={() => onCatelogClick("Event")}>Event</button>
                <button className="ui orange button">Notification({notificationNumber})</button>
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