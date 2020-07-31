import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} defaultValue={props.name} title="field1" />
        </div>

    )

};

export default userInput;