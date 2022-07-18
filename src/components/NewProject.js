import React from 'react';

import useStore from '../store/store';
import { makeArray } from '../utils/makeArray';

import Button from './common/Button';

const NewProject = () => {
  const { baseColor, rows, columns } = useStore();

  const handleClick = () => {
    useStore.setState({
      canvas: makeArray(rows, columns, baseColor),
      selectedColor: '#000',
      selectedTools: 'BRUSH',
      rows: 20,
      columns: 20,
    });
  };

  return (
    <Button onClick={handleClick} width={150}>
      NEW
    </Button>
  );
};

export default NewProject;
