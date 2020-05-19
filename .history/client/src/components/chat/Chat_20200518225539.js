import React, {useState, useEffect} from 'react';
import queryString from "query-string";
import io from "socket.io-client"; 


let socket;

const Chat = ({location}) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");


    useEffect(() => {
        const {name, room}= queryString.parse(location.search);

        socket = io("localhost:5000");

        setName(name);
        setRoom(room);
       
    })
    return (
        <div>
            <h1>Hello Chat</h1>
        </div>
    )
}

export default Chat
