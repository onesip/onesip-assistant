import React from 'react';
import { Leaf } from 'lucide-react';

interface ChatBubbleProps {
    text: string;
    type: 'bot' | 'user';
    children?: React.ReactNode;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, type, children }) => {
    const isUser = type === 'user';
    return (
        <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && (
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-sm border-2 border-white bg-secondary">
                    <Leaf size={16} className="text-primary" />
                </div>
            )}
            <div 
                className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm transition-all duration-200 ${
                    isUser 
                        ? 'rounded-3xl rounded-tr-none text-white bg-primary' 
                        : 'rounded-3xl rounded-tl-none text-gray-700 bg-white border border-stone-50'
                }`}
            >
                {text && <p className="whitespace-pre-line">{text}</p>}
                {children}
            </div>
        </div>
    );
};

export default ChatBubble;
