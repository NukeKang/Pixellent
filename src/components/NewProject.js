import React from 'react';

import { useStore } from '../store/store';
import makeArray from '../utils/makeArray';

import Button from './common/Button';

const NewProject = () => {
  const { row, column, baseColor } = useStore();
  const handleClick = () => {
    useStore.setState({ canvas: makeArray(row, column, baseColor) });
  };
  return <Button onClick={handleClick}>NEW</Button>;
};

export default NewProject;
