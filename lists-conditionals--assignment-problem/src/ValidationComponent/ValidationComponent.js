import React from 'react';

const validationComponent = (props) => {
    const checkLength = props.textLength;
    return (

        <div>

            {
                <p>{(checkLength < 5) ? 'Text too short' : 'Text Long enough'}</p>
                /* <p>Text Length = {checkLength}</p> */
            }
        </div>
    )
}

export default validationComponent;