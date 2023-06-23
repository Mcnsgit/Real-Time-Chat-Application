import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleInputChange = e => {
        setMessage(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return (
        <form className="message-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={handleInputChange}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;