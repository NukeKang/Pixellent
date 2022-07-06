import React, { useState } from 'react';

import styled from 'styled-components';

const Pixel = ({ selectedColor }) => {
  const [pixelColor, setPixelColor] = useState('#313131');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(false);

  const applyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(true);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const reset = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(false);
  };

  const handleMouseOver = () => {
    console.log(canChangeColor);
    if (!canChangeColor) {
      setPixelColor(oldColor);
    } else {
      setPixelColor(selectedColor);
    }
  };
  // 클릭하고 마우스 오버하면 색칠, 떼면 끝
  // 그냥 올리면 색칠 x
  return (
    <PixelStyle
      style={{ backgroundColor: pixelColor }}
      onMouseDown={applyColor}
      onMouseOver={handleMouseOver}
      onMouseUp={reset}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={reset}
    ></PixelStyle>
  );
};

const PixelStyle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.4px;
  &:hover {
    cursor: crosshair;
  }
  background-color: #fff;
  border-radius: 2px;
`;

export default Pixel;
