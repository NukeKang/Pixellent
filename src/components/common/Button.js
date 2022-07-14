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
  border-radius: 2px;
  padding: 0.5rem;
  background-color: ${({ bg }) => bg || '#FFF'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;
