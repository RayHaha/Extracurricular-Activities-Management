import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/* click the button to decide your identity */}
            <div className="item">
                <Link className="ui primary basic label" to="/admin">Admin</Link>
            </div>

            {/* the component of teacher and student are not done yet */}
            {/* <button className="ui positive basic button"><Link to="/teacher">Teacher</Link></button>
            <button className="ui secondary basic button"><Link to="/student">Student</Link></button> */}
        </div>
    );
}

export default Login;