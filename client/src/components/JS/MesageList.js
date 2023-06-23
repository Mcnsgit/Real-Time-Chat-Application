import React from 'react';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map(message => (
                <div key={message.id} className="message">
                    <p>{message.sender}</p>
                    <p>{message.timestamp}</p>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;