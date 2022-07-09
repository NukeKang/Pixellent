import React, { useState } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const Pixel = ({ x, y, color }) => {
  const { selectedColor, eraser, opacity2, setColor } = useStore();
  const [opacity, setOpacity] = useState(0);
  const [ownColor, setOwnColor] = useState(selectedColor);

  const applyColor = () => {
    setColor();
    setOwnColor(selectedColor);
    setOpacity(1);
  };

  const eraseColor = () => {
    setOpacity(0);
    setOwnColor('#fff');
    // useStore.setState({ opacity2: 0 });
  };

  const onClick = (e) => {
    applyColor();
    e.preventDefault();
  };

  const onContextMenu = (e) => {
    eraseColor();
    e.preventDefault();
  };

  const onMouseOver = (e) => {
    // if (e.buttons === 0 && opacity === 0) {
    //   setOpacity(0.18);
    // } else
    if (e.buttons === 1) {
      applyColor();
    } else if (e.buttons === 2) {
      eraseColor();
    }
  };
  const onMouseLeave = () => {
    if (opacity === 0.18) {
      eraseColor();
    }
  };

  return (
    <>
      <div
        style={{
          boxShadow: `${x + 1}rem ${y + 1}rem 0 -0.05rem ${color}`,
          width: '1rem',
          height: '1rem',
          cursor: 'crosshair',
          position: 'absolute',
        }}
      />
      <div
        style={{
          top: `${y + 1}rem`,
          left: `${x + 1}rem`,
          backgroundColor: ownColor,
          opacity: opacity,
          width: '1rem',
          height: '1rem',
          cursor: 'crosshair',
          position: 'absolute',
        }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        onContextMenu={onContextMenu}
        onDragStart={(e) => e.preventDefault()}
        onDragEnd={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
      />
    </>
  );
};

const PixelStyled = styled.div`
  /* background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity};
  top: ${(props) => props.y + 1}rem;
  left: ${(props) => props.x + 1}rem;
  width: 1rem;
  height: 1rem;
  cursor: crosshair !important;
  position: absolute; */
`;

export default Pixel;
