import React from 'react';
// import io from 'socket.io-client';
// import queryString from 'query-string';

import MembersSection from '../../components/members-section/members-section.component';
import ChatSection from '../../components/chat-section/chat-section.component';

import './ChatPage.styles.css';

// let socket;

const ChatPage = () => {
    // const [name, setName] = useState('');
    // const [room, setRoom] = useState('');
    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState('');
    // const [latestMsg, setLatestMsg] = useState({});
    // const [roomUsers, setRoomUsers] = useState([]);
    // const [shouldRedirect, setShouldRedirect] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');

    // const ENDPOINT = 'localhost:5000';

    // useEffect(() => {
    //     console.log('I am rerendering');
    // });

    // useEffect(() => {
    //     console.log('I am remounting');
    // }, []);

    // useEffect(() => {
    //     const { name, room } = queryString.parse(location.search);
    //     setName(name);
    //     setRoom(room);

    //     socket = io(ENDPOINT);

    //     socket.emit('joinRoom', { username: name, room }, (error) => {
    //         if (error) {
    //             setShouldRedirect(true);
    //             setErrorMessage(error);
    //         }
    //     });

    //     return () => {
    //         socket.emit('disconnect');
    //         socket.off();
    //     };
    // }, [ENDPOINT, location.search]);

    // useEffect(() => {
    //     socket.on('message', (message) => {
    //         console.log(message);
    //         setLatestMsg(message);
    //         setInput('');
    //     });
    //     // eslint-disable-next-line
    // }, []);

    // useEffect(() => {
    //     socket.on('roomData', ({ roomUsers }) => {
    //         setRoomUsers(roomUsers);
    //     });
    // }, [roomUsers]);

    // useEffect(() => {
    //     setMessages((messages) => [...messages, latestMsg]);
    // }, [latestMsg]);

    // const sendMessage = (e) => {
    //     e.preventDefault();

    //     socket.emit('sendMessage', {
    //         message: input,
    //         user: name,
    //     });
    // };

    // // return (
    // //     <div>

    // //         <h1>CHATPAGE</h1>
    // //         <h2>{room}</h2>
    // //         <div>
    // //             {
    // //                 roomUsers.map((roomUser,i) => (
    // //                     <div key={i}>{roomUser.username}</div>
    // //                 ))
    // //             }
    // //         </div>
    // //         {
    // //             messages.length > 0 ?
    // //             messages.slice(1).map((message, i) => (
    // //             <div key={i}>{`${message.message} - ${message.user}`}</div>
    // //             ))
    // //             : null
    // //         }
    // //         <textarea type="text" placeholder="message" value={input} onChange={(e) => setInput(e.target.value)} required/>
    // //         <button type="submit" onClick={sendMessage} >SEND</button>

    // //     </div>
    // // )

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
            <ChatSection />
        </div>
    );
};

export default ChatPage;
