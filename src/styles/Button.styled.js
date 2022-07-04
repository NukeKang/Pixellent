import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
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
