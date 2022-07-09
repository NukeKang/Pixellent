import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const Color = ({ value }) => {
  const { selectedColor, eraser, opacity2, setColor } = useStore();

  return (
    <ColorBox
      className="color"
      style={{
        backgroundColor: value,
        outline: selectedColor === value ? '2px solid #fff' : 'none',
      }}
      onClick={() => {
        useStore.setState({ selectedColor: value });
      }}
    />
  );
};

const ColorBox = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export default Color;
