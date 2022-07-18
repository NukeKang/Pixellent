import React from 'react';

import styled from 'styled-components';

import LoadData from './LoadData';
import NewProject from './NewProject';
import PanelDimensions from './PanelDimensions';
import Preview from './Preview';
import Save from './Save';

const RightSidebar = () => {
  return (
    <>
      <PreviewWrapper>
        <Preview />
      </PreviewWrapper>
      <ButtonWrapper>
        <NewProject />
      </ButtonWrapper>
      <ButtonWrapper>
        <Save />
      </ButtonWrapper>
      <ButtonWrapper>
        <LoadData />
      </ButtonWrapper>
      <ButtonWrapper>
        <PanelDimensions />
      </ButtonWrapper>
    </>
  );
};
const PreviewWrapper = styled.div`
  margin-bottom: 5vh;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2vh;
`;

export default RightSidebar;
