import React from 'react';

import { FaBitbucket } from 'react-icons/fa';

import useStore from '../store/store';

import Button from './common/Button';

const Bucket = () => {
  return (
    <>
      <Button>
        <FaBitbucket />
      </Button>
    </>
  );
};

export default Bucket;
