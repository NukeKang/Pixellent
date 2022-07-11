import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

import Grid from './Grid';
// 최적화 필요.
const makeArray = (column, row, color) => {
  let canvas = Array(column);

  for (let x = 0; x < column; x++) {
    let canvasRow = Array(column);

    for (let y = 0; y < row; y++) {
      canvasRow[y] = color;
    }

    canvas[x] = canvasRow;
  }

  return canvas;
};

const PixelCanvas = () => {
  const { canvas, row, column, selectedColor, selectedTools, baseColor } =
    useStore();
  // 최적화 필요
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
