import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;

  .dropdown-btn {
    background-color: firebrick;
    font-size: 14px;
    color: white;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;

    .arrow {
      font-size: 14px;
      padding-left: 8px;
    }
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid firebrick;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 1;
`;

export const DropdownListItem = styled.div`
  padding: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: firebrick;
    color: white;
  }
`;
