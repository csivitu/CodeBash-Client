import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as EmojiIcon } from '../../assets/emoji.svg';
import { ReactComponent as SendIcon } from '../../assets/send.svg';

import './chat-bottom.styles.css';

const ChatBottom = ({
    onInputChange,
    sendMessage,
    input,
    addEmojiToText,
    toggleEmojiPopup,
    emojiPopup,
}) => {
    const addEmoji = (e) => {
        const emoji = e.native;
        addEmojiToText(emoji);
    };

    const renderEmojiPopup = () => {
        if (emojiPopup === 0) return null;
        return (
            <span className="emoji-picker">
                <Picker
                    onSelect={addEmoji}
                    title="Pick your emoji…"
                    emoji="point_up"
                />
            </span>
        );
    };

    return (
        <div className="chat-bottom">
            <div className="icon-left">
                <CodeIcon className="icon code-icon" />
                {renderEmojiPopup()}
                <EmojiIcon
                    className="icon emoji-icon"
                    onClick={toggleEmojiPopup}
                />
            </div>
            <textarea
                className="chat-message-input-box"
                value={input}
                onChange={onInputChange}
            />
            <button type="button" className="icon-right" onClick={sendMessage}>
                <SendIcon className="icon send-icon" />
            </button>
        </div>
    );
};

export default ChatBottom;
