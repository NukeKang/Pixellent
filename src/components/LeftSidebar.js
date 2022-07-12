import React from 'react';

import Bucket from './Bucket';
import DownloadImage from './DownloadImage';
import Eraser from './Eraser';
import Eyedropper from './Eyedropper';
import Paint from './Paint';
import Pallette from './Pallette';

const LeftSidebar = () => {
  return (
    <>
      <div>
        <Paint />
        <Eraser />
        <Bucket />
        <Eyedropper />
      </div>
      <div>
        <DownloadImage />
      </div>
      <div>
        <Pallette />
      </div>
    </>
  );
};

export default LeftSidebar;
