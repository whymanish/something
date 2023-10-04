import React, { useState } from 'react';
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === '') return;

    // Simulate a reply from the other person (you can replace this with actual logic).
    const replyMessage = {
      text: 'Hello! How can I help you?',
      isUser: false,
    };

    setMessages([...messages, { text: newMessage, isUser: true }, replyMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200 p-4 flex-grow">
        <ChatBox messages={messages} />
      </div>
      <div className="bg-gray-100 p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
