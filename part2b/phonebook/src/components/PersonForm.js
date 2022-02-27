import React from 'react';

const PersonForm = ({ personAdd, nameAdd, numberAdd, nameValue, numberValue }) => {
    return (
        <div>
            <form onSubmit={personAdd}>
                <div>
                    Name: <input value={nameValue} onChange={nameAdd} />
                </div>
                <div>
                    Number: <input value={numberValue} onChange={numberAdd} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;