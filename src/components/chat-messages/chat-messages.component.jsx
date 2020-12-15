import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectRoomMessages } from '../../redux/roomPersist/roomPersist.selector';
import { selectTheme, selectLanguage } from '../../redux/room/room.selectors';
import { selectUserName } from '../../redux/user/user.selectors';

import MessageBox from '../message-box/message-box.component';

import './chat-messages.styles.css';

const ChatMessages = ({
    messages, name, theme, language,
}) => {
    const renderMessageBox = (message, i) => {
        if (message.user === name) {
            return <MessageBox key={i} isMine message={message} theme={theme} language={language} />;
        }
        return <MessageBox key={i} message={message} theme={theme} language={language} />;
    };
    return (
        <ScrollToBottom className="chat-messages">
            {messages.length>0 ? messages.map((message, i) => renderMessageBox(message, i)) : null}
        </ScrollToBottom>
    );
};

const mapStateToProps = (state,ownProps) => ({
    messages: selectRoomMessages(ownProps.match.params.roomCode)(state),
    theme: selectTheme(state),
    language: selectLanguage(state),
    name: selectUserName(state)
});

export default withRouter(connect(mapStateToProps)(ChatMessages));
