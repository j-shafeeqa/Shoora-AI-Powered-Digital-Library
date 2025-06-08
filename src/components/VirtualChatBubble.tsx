
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';

interface VirtualChatBubbleProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
  isTyping?: boolean;
  // Additional properties for CourtSimulation
  sender?: string;
  role?: 'judge' | 'plaintiff' | 'defense' | 'user' | 'witness';
  isActive?: boolean;
}

const VirtualChatBubble: React.FC<VirtualChatBubbleProps> = ({
  message,
  isUser = false,
  timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  isTyping = false,
  sender,
  role,
  isActive = false,
}) => {
  const [showTyping, setShowTyping] = useState(isTyping);
  const [displayMessage, setDisplayMessage] = useState('');
  
  // Effect to handle typing animation
  useEffect(() => {
    if (isTyping) {
      setShowTyping(true);
      setDisplayMessage('');
      
      // After 2 seconds, show the actual message
      const timer = setTimeout(() => {
        setShowTyping(false);
        setDisplayMessage(message);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setShowTyping(false);
      setDisplayMessage(message);
    }
  }, [isTyping, message]);

  // Determine if this is a user message based on role or isUser prop
  const isUserMessage = isUser || role === 'user';
  
  // Get background color based on role
  const getBubbleColor = () => {
    if (isUserMessage) return 'bg-shoora-gold text-white rounded-tr-none';
    
    switch(role) {
      case 'judge': return 'bg-purple-100 text-gray-800 rounded-tl-none';
      case 'plaintiff': return 'bg-blue-100 text-gray-800 rounded-tl-none';
      case 'defense': return 'bg-orange-100 text-gray-800 rounded-tl-none';
      case 'witness': return 'bg-green-100 text-gray-800 rounded-tl-none';
      default: return 'bg-gray-100 text-gray-800 rounded-tl-none';
    }
  };

  // Get avatar background color based on role
  const getAvatarColor = () => {
    if (isUserMessage) return 'bg-shoora-gold';
    
    switch(role) {
      case 'judge': return 'bg-purple-200';
      case 'plaintiff': return 'bg-blue-200';
      case 'defense': return 'bg-orange-200';
      case 'witness': return 'bg-green-200';
      default: return 'bg-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex max-w-[80%] ${isUserMessage ? 'flex-row-reverse' : ''}`}>
        <div
          className={`flex items-center justify-center h-8 w-8 rounded-full mr-2 ${
            isUserMessage ? 'bg-shoora-gold ml-2 mr-0' : getAvatarColor()
          } ${isActive ? 'ring-2 ring-[#cc9c24] ring-opacity-70' : ''}`}
        >
          {isUserMessage ? <User className="h-4 w-4 text-white" /> : <MessageCircle className="h-4 w-4 text-gray-600" />}
        </div>
        <div
          className={`py-3 px-4 rounded-xl ${getBubbleColor()}`}
        >
          {sender && (
            <div className={`text-xs font-medium mb-1 ${isUserMessage ? 'text-white/80' : 'text-gray-600'}`}>
              {sender}
            </div>
          )}
          
          {showTyping ? (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '100ms' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{displayMessage}</p>
          )}
          <div className={`text-xs mt-1 ${isUserMessage ? 'text-white/70' : 'text-gray-500'}`}>{timestamp}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default VirtualChatBubble;
