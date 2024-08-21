import styled from 'styled-components';

export const StyledChatSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  border-radius: 5px;
  overflow: hidden;

  .messagesContainer {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    background-color: #f9f9f9;
  }

  .messageContainer {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .userMessageContainer {
    justify-content: flex-end;
  }

  .assistantMessageContainer {
    justify-content: flex-start;
  }

  .icon {
    width: 32px; /* Adjust size as needed */
    height: 32px; /* Adjust size as needed */
    border-radius: 50%;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .userMessage {
    background-color: #e1ffc7;
    text-align: right;
    max-width: 70%;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .assistantMessage {
    text-align: left;
    max-width: 70%;
    padding: 0.5rem;
    border-radius: 5px;
  }
`;
