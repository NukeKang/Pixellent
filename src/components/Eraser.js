import React from 'react';

import { FaEraser } from 'react-icons/fa';

import { useStore } from '../store/store';

import Button from './common/Button';

const Eraser = () => {
  const { setEraser } = useStore();

  return (
    <Button onClick={setEraser}>
      <FaEraser />
    </Button>
  );
};

export default Eraser;
