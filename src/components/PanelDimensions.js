import React from 'react';

import styled from 'styled-components';

import useStore from '../store/store';

const PanelDimensions = () => {
  const { canvasDefaultSize } = useStore();

  return (
    <Wrapper>
      <Dimension>
        <Input
          defaultValue={canvasDefaultSize}
          type="number"
          onChange={(e) => {
            useStore.setState({ canvasDefaultSize: e.target.value });
          }}
        />
        <span>SIZE</span>
      </Dimension>
      {/* <Dimension>
        <Input
          defaultValue={panelWidth}
          type="number"
          onChange={(e) => {
            setPanelWidth(e.target.value);
          }}
        />
        <span>Height</span>
      </Dimension> */}
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
