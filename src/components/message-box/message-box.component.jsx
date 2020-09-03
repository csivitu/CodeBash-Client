import React from 'react';
import './message-box.styles.css';

const MessageBox = ({ text }) => (
    <div className="message-box">
        {text}
    </div>
);

export default MessageBox;
