import React from 'react';

import styled from 'styled-components';

const Button = ({ width, children, onClick, backgroundColor, disabled }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      bg={backgroundColor}
      width={width}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  box-shadow: 0 7px #dcd7c9;
  box-sizing: border-box;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 0.5rem;
  width: ${({ width }) => width || ''}px;
  background-color: ${({ bg }) => bg || '#FFF'};
  color: ${({ color }) => color || '#333'};
  text-align: center;
  cursor: pointer;

  transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  cursor: pointer;
  :hover {
    background-color: #a27b5c;
    color: #fff;
  }
  :active {
    transform: translate(0, 5px);
    box-shadow: 0 1px #666;
  }
`;

export default Button;
