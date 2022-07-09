import React from 'react';

import Bucket from './Bucket';
import Eraser from './Eraser';
import Paint from './Paint';
import Pallette from './Pallette';

const LeftSidebar = () => {
  return (
    <>
      <div>
        <Pallette />
      </div>
      <div>
        <Paint />
        <Eraser />
        <Bucket />
      </div>
    </>
  );
};

export default LeftSidebar;
