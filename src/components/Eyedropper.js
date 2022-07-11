import React from 'react';

import { FaEyeDropper } from 'react-icons/fa';

import useStore from '../store/store';

import Button from './common/Button';

const Eyedropper = () => {
  const { setEyedropper } = useStore();

  return (
    <Button>
      <FaEyeDropper onClick={setEyedropper} />
    </Button>
  );
};

export default Eyedropper;
