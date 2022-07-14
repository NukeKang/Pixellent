import React from 'react';

import { RiPaintFill } from 'react-icons/ri';

import { useStore } from '../store/store';

// import useStore from '../store/store';

import Button from './common/Button';

const Bucket = () => {
  const { setBucket } = useStore();

  return (
    <>
      <Button onClick={setBucket}>
        <RiPaintFill />
      </Button>
    </>
  );
};

export default Bucket;
