import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <button className="ui primary basic button"><Link to="/admin">Admin</Link></button>
            <button className="ui positive basic button"><Link to="/teacher">Teacher</Link></button>
            <button className="ui secondary basic button"><Link to="/student">Student</Link></button>
        </div>
    );
}

export default Login;