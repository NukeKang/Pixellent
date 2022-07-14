import React from 'react';

import styled from 'styled-components';

import { useStore } from '../store/store';

const Preview = ({ data }) => {
  const { canvas, row, column } = useStore();
  const PreviewRow = ({ cells, storedData }) => {
    const rows = cells.map((color, i) => {
      return (
        <div
          key={i}
          style={{ backgroundColor: color, height: '5px', width: '5px' }}
        />
      );
    });

    return <Row>{rows}</Row>;
  };
  const previewGrid = (data?.paletteGridData || canvas).map((color, index) => {
    return <PreviewRow key={index} cells={color} />;
  });

  return (
    <Container row={row} column={column}>
      {previewGrid}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.row * 5}px;
  height: ${(props) => props.column * 5}px;
`;
const Row = styled.div`
  display: flex;
`;

export default Preview;
