import React from 'react';

import Bucket from './Bucket';
import DownloadImage from './DownloadImage';
import Eraser from './Eraser';
import Eyedropper from './Eyedropper';
import LoadData from './LoadData';
import NewProject from './NewProject';
import Paint from './Paint';
import Pallette from './Pallette';
import Save from './Save';

const LeftSidebar = () => {
  return (
    <>
      <div>
        <NewProject />
        <Save />
        <LoadData />
      </div>
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
