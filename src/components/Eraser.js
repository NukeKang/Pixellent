import React from 'react';

import { FaEraser } from 'react-icons/fa';

import useStore from '../store/store';

import Button from './common/Button';

const Eraser = () => {
  const { eraser } = useStore();

  return (
    <Button onClick={eraser}>
      <FaEraser />
    </Button>
  );
};

export default Eraser;
