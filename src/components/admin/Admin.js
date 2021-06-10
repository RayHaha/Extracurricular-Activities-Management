import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminProgram from './program/AdminProgram';
import AdminStudent from './student/AdminStudent';

const Admin = () => {
    const[catelog, setCatelog] = useState("Program");

    const onCatelogClick = (catelog) => {
        setCatelog(catelog);
    }

    let route;
    if(catelog==="Program"){
        route = <AdminProgram />;
    }else{
        route = <AdminStudent />;
    }

    return (
        <div>
            <div className="ui secondary pointing menu">
                <button className="ui orange basic button" onClick={() => onCatelogClick("Program")}>Program</button>
                <button className="ui secondary basic button" onClick={() => onCatelogClick("Student")}>Student</button>
                <div className="right menu">
                    <button className="ui negative basic button"><Link to="/">Logout</Link></button>
                </div>
            </div>
            <div className="ui grid">
                <div className="ten wide column">
                    {route}
                </div>
                <div className="six wide column">
                    Notification
                </div>
            </div>
        </div>
    );
}

export default Admin;