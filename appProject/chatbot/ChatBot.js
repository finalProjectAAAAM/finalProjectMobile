import { useEffect } from 'react';
import Kommunicate from 'react-native-kommunicate-chat';

const YOUR_KOMMUNICATE_APP_ID = 'REPLACE_WITH_YOUR_ACTUAL_APP_ID';  // Replace with your actual App ID from Kommunicate dashboard

const ChatBot = () => {
  const handleStartConversation = async () => {
    try {
      const conversationObject = {
        appId: YOUR_KOMMUNICATE_APP_ID,
      };

      const response = await Kommunicate.startConversation(conversationObject);

      if (response === 'Success') {
        console.log('Conversation successfully built!');
      } else {
        console.error('Error starting conversation:', response);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    } catch (error) {
      console.error('Error starting conversation:', error);
      // Handle errors appropriately as above
    }
  };

 
};

export default ChatBot;
