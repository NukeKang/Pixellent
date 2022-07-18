import React from 'react';

import styled from 'styled-components';

import Bucket from './Bucket';
import DownloadImage from './DownloadImage';
import Eraser from './Eraser';
import Eyedropper from './Eyedropper';
import Paint from './Paint';
import Palette from './Palette';

const LeftSidebar = () => {
  return (
    <>
      <ToolWrapper>
        <Paint />
        <Eraser />
        <Bucket />
        <Eyedropper />
      </ToolWrapper>
      <DownloadWrapper>
        <DownloadImage />
      </DownloadWrapper>
      <div>
        <Palette />
      </div>
    </>
  );
};

const ToolWrapper = styled.div`
  margin-bottom: 2vh;
`;

const DownloadWrapper = styled.div`
  margin-bottom: 2vh;
`;

export default LeftSidebar;
