import React from 'react';

import ChatHeader from '../chat-header/chat-header.component';
import ChatMessages from '../chat-messages/chat-messages.component';
import ChatBottom from '../chat-bottom/chat-bottom.component';

import './chat-section.styles.css';

const ChatSection = ({
    onInputChange,
    sendMessage,
    sendCode,
    code,
    input,
    addEmojiToText,
    onChangeCode,
}) => (
    <div className="chat-section">
        <ChatHeader />
        <ChatMessages />
        <ChatBottom
            onInputChange={onInputChange}
            sendMessage={sendMessage}
            sendCode={sendCode}
            input={input}
            addEmojiToText={addEmojiToText}
            code={code}
            onChangeCode={onChangeCode}
        />
    </div>
);

export default ChatSection;
