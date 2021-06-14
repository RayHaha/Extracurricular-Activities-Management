import React, { useState, useEffect } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';
import backend from '../../../api/backend';

const AdminProgram = () => {

    const [showPopUpProgram, setShowPopUpProgram] = useState(false);    // show popup or not
    const [programs, setPrograms] = useState([]);   // program list

    // fetch the data from backend
    const getPrograms = async () => {
        const response = await backend.get('/admin/program');
        setPrograms(response.data);
    }

    useEffect(() => {
        getPrograms();
    }, []);

    // open the popup window to create program
    const openPopupProgram = () => {
        setShowPopUpProgram(true);
    }

    // close the popup window then store the data into database
    const closePopupProgram = program => {
        setShowPopUpProgram(false);
        if (program.Name) {

            backend.post('/admin/program', program).then(res => {
                if (res.status !== 200){
                    console.log(res);
                }else{
                    getPrograms();
                }
            });
        }
    }

    return (
        <div>
            <button className="ui primary button" onClick={openPopupProgram}>Create Program</button>
            <ProgramList programs={programs} getPrograms={getPrograms} />

            {showPopUpProgram ? <ProgramCreate closePopupProgram={closePopupProgram} /> : null}


        </div>
    );
}

export default AdminProgram;