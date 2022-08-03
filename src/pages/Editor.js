import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import PixelCanvas from '../components/PixelCanvas';
import RightSidebar from '../components/RightSidebar';

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

const EditorMain = styled.div`
  height: 100vh;
  padding-top: 3vh;
  padding-left: 3vw;
  padding-right: 3vw;
  color: #dcd7c9;
  background-color: #303f46;
`;

const CentralContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LeftCol = styled.div`
  flex: 1;
  margin-right: 1vw;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenterCol = styled.div`
  flex: 2;
`;

const RightCol = styled.div`
  flex: 1;
  margin-left: 1vw;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Editor;
