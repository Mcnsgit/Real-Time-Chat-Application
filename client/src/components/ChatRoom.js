import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatRoom.css';

const ChatRoom = () => {
    const [socket, setSocket] = useState(null);
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:3000'); // Replace with your server's URL and port
        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('new message', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket]);

    const handleJoinRoom = () => {
        if (socket && room) {
            socket.emit('join room', room);
        }
    };

    const handleSendMessage = () => {
        if (socket && room && message) {
            socket.emit('send message', room, message);
            setMessage('');
        }
    };

    return (
        <div className="chat-room">
            <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Enter room name"
            />
            <button onClick={handleJoinRoom}>Join Room</button>

            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
            />
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default ChatRoom;
