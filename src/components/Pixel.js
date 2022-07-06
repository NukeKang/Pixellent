import React, { useState } from 'react';

import { atom, useAtom } from 'jotai';
import styled from 'styled-components';

import { selectedColorAtom } from './LeftSidebar';
const canChangeColorAtom = atom(false);

const Pixel = () => {
  const [selectedColor] = useAtom(selectedColorAtom);
  const [pixelColor, setPixelColor] = useState('#313131');
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useAtom(canChangeColorAtom);

  const applyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(true);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  const reset = () => {
    // if (canChangeColor) {
    //   setPixelColor(oldColor);
    // }

    setCanChangeColor(false);
  };

  const reset2 = () => {
    setCanChangeColor(false);
  };

  const handleMouseOver = () => {
    if (!canChangeColor) {
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
      onMouseUp={reset}
      // onMouseLeave={reset2}
      // onClick={applyColor}
    ></PixelStyled>
  );
};

const PixelStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2px;
  &:hover {
    cursor: crosshair;
  }
`;

export default Pixel;
