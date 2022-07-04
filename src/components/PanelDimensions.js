import React from 'react';

import { atom, useAtom } from 'jotai';
import styled from 'styled-components';

export const panelWidthAtom = atom(16);
export const panelHeightAtom = atom(16);

const PanelDimensions = () => {
  const [panelWidth, setPanelWidth] = useAtom(panelWidthAtom);
  const [panelHeight, setPanelHeight] = useAtom(panelHeightAtom);

  console.log(panelHeight);
  return (
    <Wrapper>
      <Dimension>
        <Input
          defaultValue={panelWidth}
          type="number"
          onChange={(e) => {
            setPanelWidth(e.target.value);
          }}
        />
        <span>Width</span>
      </Dimension>
      <Dimension>
        <Input
          defaultValue={panelHeight}
          type="number"
          onChange={(e) => {
            setPanelHeight(e.target.value);
          }}
        />
        <span>Height</span>
      </Dimension>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dimension = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.5rem;
`;

const Input = styled.input`
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  text-align: center;
  background-color: black;
  color: white;
  border: 1px solid grey;
  border-radius: 0.25rem;
  margin: 0 1rem 0.5rem 1rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none !important;
    border-color: red;
    box-shadow: 0 0 0.5rem grey;
  }
`;

export default PanelDimensions;
