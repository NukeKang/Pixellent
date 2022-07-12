import React, { useEffect, useRef } from 'react';

import useStore from '../store/store';

import Row from './Row';

const Grid = ({ update }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    useStore.setState({ gridRef: gridRef });
  }, []);

  const { canvas } = useStore();
  const grid = canvas?.map((color, index) => {
    return <Row key={index} cells={color} index={index} update={update} />;
  });

  return <div ref={gridRef}>{grid}</div>;
};

export default Grid;
