
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser, isTyping = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isTyping) {
      setDisplayedText('');
      setIsComplete(false);
    } else {
      setDisplayedText(message);
      setIsComplete(true);
    }
  }, [message, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-assistant'}`}
    >
      {isTyping ? (
        <div className="flex space-x-2 items-center">
          <span className="text-gray-600">Thinking</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{__html: message.replace(/\n/g, '<br/>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="text-[#cc9c24] hover:underline">$1</a>')}} />
      )}
    </motion.div>
  );
};

export default ChatBubble;
