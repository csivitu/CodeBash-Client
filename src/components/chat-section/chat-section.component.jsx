import React from 'react';

import ChatHeader from '../chat-header/chat-header.component';
import ChatMessages from '../chat-messages/chat-messages.component';
import ChatBottom from '../chat-bottom/chat-bottom.component';

import './chat-section.styles.css';

const ChatSection = () => (
    <div className="chat-section">
        <ChatHeader />
        <ChatMessages />
        <ChatBottom />
    </div>
);

export default ChatSection;
