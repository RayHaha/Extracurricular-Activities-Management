import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Admin from './admin/Admin';
import Teacher from './teacher/Teacher';
import Student from './student/Student';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/teacher" exact component={Teacher} />
                    <Route path="/student" exact component={Student} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;