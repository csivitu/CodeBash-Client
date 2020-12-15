import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRoomCode, selectRoomName } from '../../redux/room/room.selectors';

import './chat-header.styles.css';

const ChatHeader = ({ roomName, roomCode }) => (
    <div className="chat-header">
        <div className="room-name">
            {roomName}
        </div>
        <div className="room-code">
            {`Code: ${roomCode}`}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    roomName: selectRoomName,
    roomCode: selectRoomCode
})

export default connect(mapStateToProps)(ChatHeader);
