import React from 'react';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import PixelCanvas from '../components/PixelCanvas';
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
        <CentralContainer>
          <LeftCol>
            <LeftSidebar />
          </LeftCol>
          <CenterCol>
            <PixelCanvas />
          </CenterCol>
          <RightCol>
            <RightSidebar />
          </RightCol>
        </CentralContainer>
      </EditorMain>
    </>
  );
};

export default Editor;
