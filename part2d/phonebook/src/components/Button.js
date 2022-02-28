import React from 'react';

const Button = ({ deleteHandler, personId }) => {
    return (
        <div>
            <button onClick={() => deleteHandler(personId)}>delete</button>            
        </div>
    );
};
            <button>delete</button>
export default Button;