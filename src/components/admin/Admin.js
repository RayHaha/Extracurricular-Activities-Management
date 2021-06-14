import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminProgram from './program/AdminProgram';
import AdminStudent from './student/AdminStudent';
import AdminEvent from './event/AdminEvent';

const Admin = () => {

    // use catelog to decide the list to show
    const [catelog, setCatelog] = useState("Program");

    const onCatelogClick = (catelog) => {
        setCatelog(catelog);
    }

    let route;
    if (catelog === "Program") {
        route = <AdminProgram />;
    } else if (catelog === "Student") {
        route = <AdminStudent />;
    } else {
        route = <AdminEvent />;
    }
    // hide the notification number because haven't done yet
    // let notificationNumber = 0;

    return (
        <div>
            <div className="ui secondary pointing menu">
                <button className="ui black button" onClick={() => onCatelogClick("Program")}>Program</button>
                <button className="ui grey button" onClick={() => onCatelogClick("Student")}>Student</button>
                <button className="ui brown button" onClick={() => onCatelogClick("Event")}>Event</button>
                {/* hide the notification button because haven't done yet */}
                {/* <button className="ui orange button">Notification({notificationNumber})</button> */}

                <div className="right menu">
                    <div className="item">
                        <Link className="ui primary basic label" to="/">Logout</Link>
                    </div>
                </div>
            </div>
            <div className="ui container">
                {route}
            </div>
        </div>
    );
}

export default Admin;