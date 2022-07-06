import React from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { panelSizeAtom } from './PanelDimensions';
import Pixel from './Pixel';

const PixelCanvas = () => {
  const [canvasSize] = useAtom(panelSizeAtom);

  const pixels = [];

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return <CanvasContainer size={canvasSize}>{pixels}</CanvasContainer>;
};

const CanvasContainer = styled.div`
  background-color: rgb(28, 28, 29);
  width: 500px;
  border-radius: 3px;
  --size: ${(props) => props.size};
  height: 500px;
  display: grid;
  grid-template-columns: repeat(var(--size), 1fr);
  grid-template-rows: repeat(var(--size), 1fr);
  gap: 1px;
  padding: 2px;
`;

export default PixelCanvas;
