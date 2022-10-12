import './App.css';
import io from 'socket.io-client';
import React,{ useState} from 'react';
import Join from './Join.js';

const socket = io.connect('http://localhost:5000');

function App(){

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
       <Join />
    )
};

export default App;