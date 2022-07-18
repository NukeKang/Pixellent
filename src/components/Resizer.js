import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

import Button from './common/Button';

const Resizer = () => {
  const { increase, decrease } = useStore();

  return (
    <>
      <Button
        onClick={() => {
          increase();
        }}
        width={75}
      >
        +
      </Button>
      <Button
        onClick={() => {
          decrease();
        }}
        width={75}
      >
        -
      </Button>
    </>
  );
};

export default Resizer;
