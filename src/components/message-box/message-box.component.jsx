import React from 'react';
import './message-box.styles.css';

const MessageBox = ({ message, isMine }) => {
    const renderMessage = (message) => {
        if (message.message) {
            return (
                <div className={isMine ? 'message-box right' : 'message-box'}>
                    {`${message.user}- ${message.message}`}
                </div>
            );
        }
        return null;
    };
    return renderMessage(message);
};

export default MessageBox;
