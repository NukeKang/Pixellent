import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0 0 3px #000;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.2rem;
    margin-left: 6px;
    color: #fff;

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
