import React from 'react';

import styled from 'styled-components';

const Button = ({ children, onClick, backgroundColor, disabled }) => {
  return (
    <ButtonWrapper onClick={onClick} bg={backgroundColor} disabled={disabled}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  padding: 0.5rem;
  box-sizing: border-box;

  background-color: ${({ bg }) => bg || '#FFF'};
  color: ${({ color }) => color || '#333'};

  text-align: center;
  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  cursor: pointer;
  :hover {
    background-color: #1363df;
    transform: translateY(-3px);
    color: #fff;
  }
  :active {
    transform: translateY(3px);
  }
`;

export default Button;
