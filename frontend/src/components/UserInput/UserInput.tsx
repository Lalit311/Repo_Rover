import { FC, useState } from 'react';
import { StyledUserInput } from './UserInput.styles';
import { UserInputProps } from './UserInput.types';

export const UserInput: FC<UserInputProps> = props => {
  const { handleSubmit } = props;

  const [input, setInput] = useState('');

  const onSendClick = () => {
    if (input.trim() === '') return;
    handleSubmit(input);
    setInput('');
  };

  return (
    <StyledUserInput>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." />
      <button onClick={onSendClick}>Send</button>
    </StyledUserInput>
  );
};
