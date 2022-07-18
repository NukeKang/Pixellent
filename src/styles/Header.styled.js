import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 0 3px #000;

  h1 {
    margin-left: 6px;
    color: #dcd7c9;

    @media screen and (max-width: 200px) {
      display: none;
    }
  }

  div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
`;
