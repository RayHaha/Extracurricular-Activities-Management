import React from 'react';
import './PopUp.css';

const PopUp = props => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{props.text}</h1>
                <button onClick={props.closePopup}>close me</button>
            </div>
        </div>
    );
}

export default PopUp;