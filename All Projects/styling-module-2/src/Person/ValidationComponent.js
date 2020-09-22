import React from 'react';
import './Person.css';

const validationComponent = (props) => {
    
    let validationMessage = "Text Long Enough"

    if(props.inputLength <= 5){
        validationMessage = 'Text too short'
    }

    return (
        <div className = "Person">
            <p>{validationMessage}</p>
        </div>
    );
};

export default validationComponent;