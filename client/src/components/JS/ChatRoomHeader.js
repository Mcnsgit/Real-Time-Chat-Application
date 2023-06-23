import React from 'react';

const ChatRoomHeader = ({ roomName, additionalInfo }) => {
    return (
        <div className="chat-room-header">
            <h2>{roomName}</h2>
            <p>{additionalInfo}</p>
        </div>
    );
};

export default ChatRoomHeader;