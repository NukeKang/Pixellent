import React from 'react';

import { FaEyeDropper } from 'react-icons/fa';

import useStore from '../store/store';

import Button from './common/Button';

const Eyedropper = () => {
  const { setEyedropper } = useStore();

  return (
    <Button width={50}>
      <FaEyeDropper onClick={setEyedropper} data-testid="eyedropper" />
    </Button>
  );
};

export default Eyedropper;
