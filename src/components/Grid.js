import React from 'react';

import useStore from '../store/store';

import Row from './Row';

const Grid = ({ update }) => {
  const { canvas } = useStore();
  const grid = canvas?.map((color, index) => {
    return <Row key={index} cells={color} index={index} update={update} />;
  });

  return <div>{grid}</div>;
};

export default Grid;
