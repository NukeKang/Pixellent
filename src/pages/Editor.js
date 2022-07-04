import React from 'react';

import styled from 'styled-components';

import FrameHandler from '../components/FrameHandler';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import {
  EditorMain,
  CentralContainer,
  LeftCol,
  CenterCol,
  RightCol,
} from '../styles/EditorMain.styled';

const Editor = () => {
  return (
    <>
      <Header />
      <EditorMain>
        <FrameHandler />
        <CentralContainer>
          <LeftCol>
            <LeftSidebar />
          </LeftCol>
          <CenterCol>center</CenterCol>
          <RightCol>
            <RightSidebar />
          </RightCol>
        </CentralContainer>
      </EditorMain>
    </>
  );
};

export default Editor;
