import { FC, useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { UserInput } from '../UserInput/UserInput';
import { StyledChatSection } from './ChatSection.styles';
import { ChatMessage } from './ChatSection.types';
import { sampleMarkdown } from './ChatSelection.mock';
import 'highlight.js/styles/github.css';

export const ChatSection: FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (input: string) => {
    // Simulate Assistant response (replace this with actual logic)
    setMessages([...messages, { type: 'user', text: input }, { type: 'assistant', text: sampleMarkdown }]);
  };

  return (
    <StyledChatSection>
      <div className="messagesContainer">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`messageContainer ${msg.type === 'user' ? 'userMessageContainer' : 'assistantMessageContainer'}`}
          >
            {msg.type === 'user' && (
              <>
                <div className="message userMessage">{msg.text}</div>
                <img src="/user-icon.jpg" alt="User icon" className="icon" />
              </>
            )}
            {msg.type === 'assistant' && (
              <>
                <img src="/assistant-icon.png" alt="Assistant icon" className="icon" />
                <div ref={messagesEndRef} className={'message assistantMessage'}>
                  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{msg.text}</ReactMarkdown>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <UserInput handleSubmit={handleSend} />
    </StyledChatSection>
  );
};
