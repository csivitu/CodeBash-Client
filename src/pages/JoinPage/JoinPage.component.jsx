import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';

import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { setRoomData } from '../../redux/room/room.actions';

import '../../assets/css/styles.css';
import '../../assets/css/gradient.css';
import hash from '../../assets/icons/hash.png';
import semicolon from '../../assets/icons/semicolon.png';
import bg from '../../assets/bg/bg.png';

const JoinPage = ({setRoomData}) => {
    const [roomName, setRoomname] = useState('');
    const [roomCode, setRoomcode] = useState('');
    const [joinRoomCode, setJoinRoomCode] = useState('');

    const history = useHistory();

    const createAndJoinRoom = () => {
        if (roomCode.length !== 36) {
            swal('Invalid room code');
        } else if (roomName === '') {
            swal('The room must have a name');
        } else {
            setRoomData(roomName, roomCode);
            history.push(`/chat/${roomCode}`);
        }
    }

    const joinRoom = () => {
        if (joinRoomCode.length !== 36) {
            swal('Invalid room code');
        } else {
            setRoomData(null, joinRoomCode);
            history.push(`/chat/${joinRoomCode}`);
        }
    }

    // return (
    //     <div>
    //         <h1>JOINPAGE</h1>
    //         <form>
    //             <input
    //                 type="text"
    //                 placeholder="Name"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 required
    //             />
    //             <input
    //                 type="text"
    //                 placeholder="Room"
    //                 value={room}
    //                 onChange={(e) => setRoom(e.target.value)}
    //                 required
    //             />
    //             <Link
    //                 onClick={(e) => ((!name || !room) ? e.preventDefault() : null)}
    //                 to={`/chat?name=${name}&room=${room}`}
    //             >
    //                 <button type="submit">JOIN ROOM</button>
    //             </Link>
    //         </form>
    //     </div>
    // );

    return (
        <>
            <div className="left">
                <div className="bg">
                    <img src={bg} alt="Background" className="background-image" />
                </div>
                <div className="heading-text">
                    <h1>
                        A messaging platform
                        <br />
                        <span className="GradientAnimationText">for coders.</span>
                    </h1>
                </div>
                <div className="icons">
                    <div className="hash-icon-div">
                        <img src={hash} alt="Hash" className="hash-icon" />
                    </div>
                    <div className="semicolon-icon-div">
                        <img src={semicolon} alt="semicolon" className="semicolon-icon" />
                    </div>
                </div>
            </div>
            <div className="right" style={{ zIndex: 10 }}>
                <div id="card" className="GradientAnimation">
                    <div className="inner-card" style={{ height: 500, alignItems: 'stretch', justifyContent: 'space-between' }}>
                        <div className="create-room">
                            <h2 style={{ marginBottom: 10, marginLeft: 10 }}>Create a room: </h2>
                            <input
                                type="text"
                                className="textbox"
                                placeholder="Generate room code"
                                value={roomCode}
                                onChange={(e) => setRoomcode(e.target.value)}
                            />
                            <input
                                type="text"
                                className="textbox"
                                placeholder="Give your room a name"
                                style={{ marginTop: 10 }}
                                value={roomName}
                                onChange={(e) => setRoomname(e.target.value)}
                            />
                            <button
                                type="button"
                                id="SignIn"
                                className="GradientButton"
                                style={{ marginTop: 10 }}
                                onClick={() => roomCode.length === 36 ? createAndJoinRoom() : setRoomcode(uuidv4())}
                            >
                                {roomCode.length === 36 ? 'Join Room' : 'Get Code'}
                            </button>
                        </div>
                        <div className="create-room">
                            <h2 style={{ marginBottom: 10, marginLeft: 10 }}>Join a room: </h2>
                            <input
                                type="text"
                                className="textbox"
                                placeholder="Enter room code"
                                value={joinRoomCode}
                                onChange={(e) => setJoinRoomCode(e.target.value)}
                            />
                            <button
                                type="button"
                                id="SignIn"
                                className="GradientButton"
                                style={{ marginTop: 10 }}
                                onClick={joinRoom}
                            >
                                Join Room
                            </button>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    setRoomData: (roomName, roomCode) => (dispatch(setRoomData(roomName, roomCode)))
})

export default connect(null,mapDispatchToProps)(JoinPage);
