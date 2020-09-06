import React from 'react';

import MessageBox from '../message-box/message-box.component';

import './chat-messages.styles.css';

const ChatMessages = ({ messages, name }) => {
    console.log('Inside CHAT MESSAGES: ', messages);
    const renderMessageBox = (message, i) => {
        if (message.user === name) {
            return <MessageBox key={i} isMine message={message} />;
        }
        return <MessageBox key={i} message={message} />;
    };
    return (
        <div className="chat-messages">
            {messages.map((message, i) => renderMessageBox(message, i))}
        </div>
    );
};

export default ChatMessages;
