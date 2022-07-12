import React from 'react';

import styled from 'styled-components';

import PanelDimensions from './PanelDimensions';
import Preview from './Preview';

const RightSidebar = () => {
  return (
    <>
      <PreviewContainer>
        <Preview />
      </PreviewContainer>

      <PanelDimensions />
    </>
  );
};

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default RightSidebar;
