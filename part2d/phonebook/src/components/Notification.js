import React from 'react';

const Notification = ({ message }) => {

    if(message === null) {
        return null
    }
    const error = message.includes('Error')
    if(error) {
        return (
            <div className='error'>
                {message}
            </div>
        );
    }
    return (
        <div className='success'>
            {message}
        </div>
    );
};

export default Notification;