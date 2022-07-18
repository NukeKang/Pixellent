import styled from 'styled-components';

export const EditorMain = styled.div`
  height: 100vh;
  /* width: 100%; */
  margin: 0 auto;
  padding: 0;
  padding-left: 3vw;
  padding-right: 3vw;
  color: #dcd7c9;
  background-color: #303f46;
`;

export const CentralContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LeftCol = styled.div`
  flex: 1;
  margin-right: 1vw;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CenterCol = styled.div`
  flex: 2;
`;

export const RightCol = styled.div`
  flex: 1;
  margin-left: 1vw;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
