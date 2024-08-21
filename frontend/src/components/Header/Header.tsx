import { FC, useState } from 'react';
import { StyledHeader } from './Header.styles';
import { ModeSelection } from '../ModeSelection/ModeSelection';

export const Header: FC = () => {
  const [showRepoAdditionModal, setShowRepoAdditionModal] = useState(false);

  console.log(showRepoAdditionModal);

  return (
    <StyledHeader>
      <img src="/logo.png" alt="App Logo" className="logo" />
      <div className="right-container">
        <button className="add-repo-btn" onClick={() => setShowRepoAdditionModal(true)}>
          + Add New Repo
        </button>
        <ModeSelection />
      </div>
    </StyledHeader>
  );
};
