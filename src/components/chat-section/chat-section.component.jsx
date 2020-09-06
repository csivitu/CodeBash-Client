import React from 'react';

import ChatHeader from '../chat-header/chat-header.component';
import ChatMessages from '../chat-messages/chat-messages.component';
import ChatBottom from '../chat-bottom/chat-bottom.component';

import './chat-section.styles.css';

const ChatSection = ({
    room,
    messages,
    name,
    onInputChange,
    sendMessage,
    input,
    addEmojiToText,
    toggleEmojiPopup,
    emojiPopup,
}) => (
    <div className="chat-section">
        <ChatHeader room={room} />
        <ChatMessages messages={messages} name={name} />
        <ChatBottom
            onInputChange={onInputChange}
            sendMessage={sendMessage}
            input={input}
            addEmojiToText={addEmojiToText}
            toggleEmojiPopup={toggleEmojiPopup}
            emojiPopup={emojiPopup}
        />
    </div>
);

export default ChatSection;
