import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const Row = ({ cells, index, update }) => {
  const { selectedTools, selectedColor, floodFill, canvas, checkChangedColor } =
    useStore();

  const rows = cells.map((color, i) => {
    const handleMouseDown = (e) => {
      if (selectedTools === 'BRUSH') {
        update(i, index);
        e.target.style.backgroundColor = selectedColor;
        checkChangedColor();
      }
      if (selectedTools === 'ERASER') {
        e.target.style.backgroundColor = '#fff';
        update(i, index);
        checkChangedColor();
      }
      if (selectedTools === 'BUCKET') {
        floodFill(canvas, index, i, selectedColor);

        update(i, index);
        checkChangedColor();
      }

      if (selectedTools === 'EYEDROPPER') {
        useStore.setState({ selectedColor: e.target.style.backgroundColor });
        useStore.setState({ selectedTools: 'BRUSH' });
      }

      return;
    };
    const handleDragStart = (e) => {
      let dragImgEl = document.createElement('span');
      dragImgEl.setAttribute(
        'style',
        'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;',
      );
      e.dataTransfer.setDragImage(dragImgEl, 0, 0);
    };
    const handleDragEnter = (e) => {
      if (selectedTools === 'BRUSH') {
        e.target.style.backgroundColor = selectedColor;
        update(i, index);
        checkChangedColor();
      }
      if (selectedTools === 'ERASER') {
        e.target.style.backgroundColor = '#fff';
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
  });

  return <Rows>{rows}</Rows>;
};

const Pixel = styled.div`
  height: 18px;
  width: 18px;
  margin: 0px;
  border-right: 0.1px solid #9e9e9e;
  border-bottom: 0.1px solid #9e9e9e;

  cursor: crosshair;
`;

const Rows = styled.div`
  display: flex;
`;

export default Row;
