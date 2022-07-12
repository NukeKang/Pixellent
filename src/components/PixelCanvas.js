import React, { useEffect } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';
import makeArray from '../utils/makeArray';

import Grid from './Grid';

const PixelCanvas = () => {
  const { canvas, row, column, selectedColor, selectedTools, baseColor } =
    useStore();

  const update = (x, y) => {
    if (canvas[y][x] !== selectedColor) {
      canvas[y][x] = selectedColor;
    }

    if (selectedTools === 'ERASER') {
      canvas[y][x] = '#fff';
    }
  };

  useEffect(() => {
    useStore.setState({ canvas: makeArray(row, column, baseColor) });
  }, [row, column]);

  return (
    <CanvasContainer>
      <Grid update={update} />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #303f46;
`;

export default PixelCanvas;
