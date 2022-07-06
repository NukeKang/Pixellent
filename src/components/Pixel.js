import React, { useState } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const Pixel = () => {
  const { selectedColor } = useStore();

  const [pixelColor, setPixelColor] = useState('#313131');
  const { canChangeColor, draggable } = useStore();

  const applyColor = () => {
    setPixelColor(selectedColor);
    canChangeColor();
  };

  const resetColor = () => {
    canChangeColor();
  };

  const handleMouseOver = () => {
    if (!draggable) {
      return;
    } else {
      setPixelColor(selectedColor);
    }
  };
  return (
    <PixelStyled
      backgroundColor={pixelColor}
      onMouseDown={applyColor}
      onMouseOver={handleMouseOver}
      onMouseUp={resetColor}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    ></PixelStyled>
  );
};

const PixelStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};
`;

export default Pixel;
