import React, { memo, useCallback } from 'react';

import styled from 'styled-components';

import useStore from '../store/store';
import { floodFill } from '../utils/floodFill';

const Row = ({ cells, index, update }) => {
  const { selectedTools, selectedColor, canvas, checkChangedColor } =
    useStore();

  const rows = useCallback(
    cells.map((color, i) => {
      const handleMouseDown = (event) => {
        if (event.target.style.backgroundColor === selectedColor) {
          console.log('true');
          return;
        }
        if (selectedTools === 'BRUSH') {
          event.target.style.backgroundColor = selectedColor;

          update(i, index);
          checkChangedColor();
        }
        if (selectedTools === 'ERASER') {
          event.target.style.backgroundColor = '#fff';
          update(i, index);
          checkChangedColor();
        }
        if (selectedTools === 'BUCKET') {
          floodFill(canvas, index, i, selectedColor);

          update(i, index);
          checkChangedColor();
        }

        if (selectedTools === 'EYEDROPPER') {
          useStore.setState({
            selectedColor: event.target.style.backgroundColor,
          });
          useStore.setState({ selectedTools: 'BRUSH' });
        }

        return;
      };

      const handleDragStart = (event) => {
        let dragImgEl = document.createElement('span');
        dragImgEl.setAttribute(
          'style',
          'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;',
        );

        event.dataTransfer.setDragImage(dragImgEl, 0, 0);
      };

      const handleDragEnter = (event) => {
        if (selectedTools === 'BRUSH') {
          event.target.style.backgroundColor = selectedColor;
          update(i, index);
          checkChangedColor();
        }
        if (selectedTools === 'ERASER') {
          event.target.style.backgroundColor = '#fff';
          update(i, index);
          checkChangedColor();
        }

        return;
      };

      return (
        <Pixel
          key={i}
          className="pixel"
          style={{ backgroundColor: color }}
          draggable={true}
          onMouseDown={handleMouseDown}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
        />
      );
    }),
    [selectedTools, selectedColor, canvas, cells, index, update],
  );

  return <Rows>{rows}</Rows>;
};

const Pixel = styled.div`
  height: 20px;
  width: 20px;
  margin: 0px;
  border-right: 0.1px solid #9e9e9e;
  border-bottom: 0.1px solid #9e9e9e;
  cursor: crosshair;
`;

const Rows = styled.div`
  display: flex;
`;

export default memo(Row);
