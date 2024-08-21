import { useState } from 'react';
import { DropdownContainer, DropdownList, DropdownListItem } from './ModeSelection.styles';

const modes = [
  { value: 'instructor', label: 'Instructor' },
  { value: 'developer', label: 'Developer' },
  { value: 'ux', label: 'UX' },
];

export const ModeSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState(modes[0]);

  const handleModeSelection = (mode: { value: string; label: string }) => {
    setSelectedMode(mode);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        Select Mode: {selectedMode.label}
        {isOpen ? <span className="arrow">&#9650;</span> : <span className="arrow">&#9660;</span>}
      </button>
      {isOpen && (
        <DropdownList>
          {modes.map(mode => (
            <DropdownListItem key={mode.value} onClick={() => handleModeSelection(mode)}>
              {mode.label}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};
