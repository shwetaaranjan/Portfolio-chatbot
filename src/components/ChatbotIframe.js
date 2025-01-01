// ChatbotIframe.js
import React, { useState } from 'react';
import "../style.css"  // Import your CSS file
import chatbot from "../Assets/chatbot.png";

const ChatbotIframe = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbotVisibility = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className="chatbot-container" >
      <div className="chatbot-icon" onClick={toggleChatbotVisibility}>
        <img src={chatbot} alt="Chat Icon" />
      </div>
      {isChatbotVisible && (
        <iframe
          title='chatbot'
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/c9422c57-ac54-4982-ba56-1099c0182333"
        ></iframe>
      )}
    </div>
  );
};

export default ChatbotIframe;