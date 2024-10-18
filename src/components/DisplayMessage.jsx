import React from 'react';

const DisplayMessage = ({ message }) => {
    return (
        <div>
            <h2>Повідомлення: {message}</h2>
        </div>
    );
};

export default DisplayMessage;