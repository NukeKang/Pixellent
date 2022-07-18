import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

import Resizer from './Resizer';

const PanelDimensions = () => {
  const { rows, columns } = useStore();

  return (
    <>
      <DimensionWrapper>
        {rows} X {columns}
      </DimensionWrapper>
      <ResizeWrapper>
        <Resizer />
      </ResizeWrapper>
    </>
  );
};

const ResizeWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const DimensionWrapper = styled.div`
  font-size: 1em;
  text-align: center;
  background-color: black;
  color: white;
  border: 1px solid grey;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 2vh;
  margin-top: 1vh;
`;

export default PanelDimensions;
