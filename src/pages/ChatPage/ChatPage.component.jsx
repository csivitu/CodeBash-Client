import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRoomName, selectRoomCode } from '../../redux/room/room.selectors';
import { updateRoomUsers, addMessage } from '../../redux/roomPersist/roomPersist.actions';
import { setRoomData } from '../../redux/room/room.actions';
import { selectUserName } from '../../redux/user/user.selectors';

import MembersSection from '../../components/members-section/members-section.component';
import ChatSection from '../../components/chat-section/chat-section.component';

import './ChatPage.styles.css';


let socket;

const ChatPage = ({name,roomName, roomCode, updateRoomUsers, setRoomData, addMessage}) => {
    const [input, setInput] = useState('');
    // const [latestMsg, setLatestMsg] = useState({});
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [code, setCode] = useState('');

    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        console.log('I am rerendering');
    });

    useEffect(() => {
        console.log('I am remounting');
    }, []);

    useEffect(() => {

        socket = io(ENDPOINT);

        socket.emit('joinRoom', { username: name, roomCode, roomName }, (error) => {
            if (error) {
                setShouldRedirect(true);
                setErrorMessage(error);
            }
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, [ENDPOINT, name, roomCode]);

    useEffect(() => {
        socket.on('message', (message) => {
            // console.log(message);
            // setLatestMsg(message);
            addMessage(message);
            setInput('');
        });

        socket.on('roomData', ({ roomUsers, roomName }) => {
            updateRoomUsers(roomUsers);
            setRoomData(roomName, roomCode);
        });
        // eslint-disable-next-line
    }, []);

    // useEffect(() => {
    //     socket.on('roomData', ({ roomUsers }) => {
    //         updateRoomUsers(roomUsers);
    //     });
    // }, [roomUsers]);

    // useEffect(() => {
    //     setMessages((messages) => [...messages, latestMsg]);
    //     console.log(messages);
    // }, [latestMsg]);

    const sendMessage = (e) => {
        e.preventDefault();

        socket.emit('sendMessage', {
            message: input,
            user: name,
            type: 'message',
            roomCode
        });
    };

    const sendCode = (e) => {
        e.preventDefault();
        console.log('sendcode triggered');
        socket.emit('sendMessage', {
            message: code,
            user: name,
            type: 'code',
            roomCode
        });
    };

    const changeInput = (e) => setInput(e.target.value);
    const addEmojiToText = (emoji) => setInput(input + emoji);
    const onChangeCode = (codeValue) => {
        setCode(codeValue);
    };
    // return (
    //     <div>

    //         <h1>CHATPAGE</h1>
    //         <h2>{room}</h2>
    //         <div>
    //             {
    //                 roomUsers.map((roomUser,i) => (
    //                     <div key={i}>{roomUser.username}</div>
    //                 ))
    //             }
    //         </div>
    //         {
    //             messages.length > 0 ?
    //             messages.slice(1).map((message, i) => (
    //             <div key={i}>{`${message.message} - ${message.user}`}</div>
    //             ))
    //             : null
    //         }
    //         <textarea type="text" placeholder="message" value={input} onChange={(e) => setInput(e.target.value)} required/>
    //         <button type="submit" onClick={sendMessage} >SEND</button>

    //     </div>
    // )

    // return (
    //     <div>
    //         {shouldRedirect ? (
    //             <div>
    //                 <h1>{errorMessage}</h1>
    //                 <button type="button" onClick={() => history.push('/')}>
    //                     GO BACK TO HOMEPAGE
    //                 </button>
    //             </div>
    //         ) : (
    //             <div>
    //                 <h1>CHATPAGE</h1>
    //                 <h2>{room}</h2>
    //                 <div>
    //                     {roomUsers.map((roomUser, i) => (
    //                         <div key={i}>{roomUser.username}</div>
    //                     ))}
    //                 </div>
    //                 {messages.length > 0
    //                     ? messages.slice(1).map((message, i) => (
    //                         <div key={i}>
    //                             {`${message.message} - ${message.user}`}
    //                         </div>
    //                     ))
    //                     : null}
    //                 <input
    //                     type="text"
    //                     placeholder="message"
    //                     value={input}
    //                     onChange={(e) => setInput(e.target.value)}
    //                     required
    //                 />
    //                 <button type="submit" onClick={sendMessage}>
    //                     SEND
    //                 </button>
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        <div className="chat-page">
            <MembersSection />
            <ChatSection
                onInputChange={changeInput}
                sendMessage={sendMessage}
                sendCode={sendCode}
                input={input}
                addEmojiToText={addEmojiToText}
                code={code}
                onChangeCode={onChangeCode}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    roomName: selectRoomName,
    roomCode: selectRoomCode,
    name: selectUserName,
})

const mapDispatchToProps = dispatch => ({
    addMessage: (message) => (dispatch(addMessage(message))),
    updateRoomUsers: (users) => (dispatch(updateRoomUsers(users))),
    setRoomData: (roomName, roomCode) => (dispatch(setRoomData(roomName, roomCode)))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatPage);
