import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const Color = ({ color }) => {
  const { selectedColor } = useStore();

  return (
    <ColorBox
      bg={color}
      outline={selectedColor}
      onClick={() => {
        useStore.setState({ selectedColor: color });
      }}
    />
  );
};

const ColorBox = styled.div`
  background-color: ${({ bg }) => bg};
  border-radius: 5px;
  outline: ${({ outline, bg }) => (outline === bg ? '2px solid #fff' : 'none')};
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin: 1px;

  transition: all 0.2s linear;
  :hover {
    transform: scale(1.4);
  }
`;

export default Color;
