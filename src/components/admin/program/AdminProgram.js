import React, { useState, useEffect } from 'react';
import ProgramList from './ProgramList';
import ProgramCreate from './ProgramCreate';
import backend from '../../../api/backend';

const AdminProgram = () => {

    const [showPopUpProgram, setShowPopUpProgram] = useState(false);
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const getPrograms = async () => {
            const response = await backend.get('/admin/program');
            setPrograms(response.data);
        }
        getPrograms();
    }, []);

    const openPopupProgram = () => {
        setShowPopUpProgram(true);
    }

    const closePopupProgram = program => {
        setShowPopUpProgram(false);
        if (program.Name) {
            let p = programs;
            p.push(program);
            setPrograms(p);

            backend.post('/admin/program', program).then(res => {
                if (res.status !== 200) console.log(res);
            });
        }
    }

    if (programs.length < 1) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <button className="ui primary button" onClick={openPopupProgram}>Create Program</button>
            <ProgramList programs={programs} />

            {showPopUpProgram ? <ProgramCreate closePopupProgram={closePopupProgram} /> : null}


        </div>
    );
}

export default AdminProgram;