import React,{useState} from 'react';
import io from 'socket.io-client';
import Chat from './Chat'
const socket = io.connect('http://localhost:5000');

const Join = () => {
    const [username,setusername] = useState('');
    const[showChat,setshowChat] = useState('');
    const[room,setroom] = useState('');

    const joinRoom = () => {
        if(username !=="" && room !==""){
            socket.emit("join_room",room);
            setshowChat(true);
        }
    }
    return(
        <div className='App'>
        {!showChat ?(
        <div className='joinChatContainer'>
        <h2>Join Chat</h2>
        <input type="text" placeholder='UserName' onChange={(event)=> {setusername(event.target.value)}}>

    </input>
    <input type='text' placeholder='Room' onChange={(event)=> {setroom(event.target.value)}}>
    </input>
    <button onClick={joinRoom}>Join</button>
        </div>

        ):(
        <Chat socket={socket} username={username} room={room} />
        )}
    </div>
    )
};

export default Join;