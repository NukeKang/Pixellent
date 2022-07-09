import React, { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

import Pixel from './Pixel';

const PixelCanvas = () => {
  const { row, column } = useStore();
  const GRID_INITIAL_COLOR = '#fff';

  const [pixels, setPixels] = useState([]);

  useEffect(() => {
    const grid = [];

    for (let x = 0; x < column; x++) {
      const rows = [];

      for (let y = 0; y < row; y++) {
        rows.push(<Pixel key={y} x={x} y={y} color={GRID_INITIAL_COLOR} />);
      }
      grid.push(rows);
    }

    setPixels(grid);
  }, [row, column]);
  console.log('🔥🔥🔥', pixels);

  return <CanvasContainer>{pixels}</CanvasContainer>;
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default PixelCanvas;
