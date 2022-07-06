import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

import Pixel from './Pixel';

const PixelCanvas = () => {
  const canvasSize = useStore((state) => state.canvasDefaultSize);

  const { canChangeColor, draggable, preventEvent } = useStore();

  const pixels = [];

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return (
    <CanvasContainer size={canvasSize} onMouseLeave={preventEvent}>
      {pixels}
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  background-color: rgb(28, 28, 29);
  width: 500px;
  --size: ${(props) => props.size};
  height: 500px;
  display: grid;
  grid-template-columns: repeat(var(--size), 1fr);
  grid-template-rows: repeat(var(--size), 1fr);
  gap: 0.5px;
  padding: 2px;
`;

export default PixelCanvas;
