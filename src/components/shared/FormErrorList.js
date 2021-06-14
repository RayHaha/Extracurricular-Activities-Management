import React from 'react';
import FormErrorItem from './FormErrorItem';

const FormErrorList = props => {

    // handle the error message list of the form
    const errorMessages = props.errorMessageList.map(errorMessage => {
        return <FormErrorItem key={errorMessage} errorMessage={errorMessage} />;
    });

    return (
        <div className="ui error message">
            <div className="header">Submission Fail</div>
                <ul className="list">
                    {errorMessages}
                </ul>
        </div>
    );
}

export default FormErrorList;