import styled from 'styled-components';

export const StyledHeader = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .logo {
    width: 120px;
  }

  .right-container {
    display: flex;
    gap: 10px;

    .add-repo-btn {
      background-color: firebrick;
      font-size: 14px;
      color: white;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
