import React from 'react';

import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Title>Pixellent</Title>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 3px #000;
  z-index: 20;
`;

const Wrapper = styled.div`
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin-left: 6px;
  color: #fff;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
