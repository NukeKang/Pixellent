import React from 'react';

import styled from 'styled-components';

import Color from './Color';

const colors = [
  '#000000',
  '#ff0000',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#9ee07a',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ffcdd2',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b',
  '#303f46',
  '#ffffff',
  '#383535',
];

const Pallette = () => {
  return (
    <PalletteBox>
      {colors.map((color) => (
        <Color key={color} value={color} />
      ))}
    </PalletteBox>
  );
};

const PalletteBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.3rem;
  width: 5rem;
  height: auto;
  background: #a7a5a7;
  margin-left: 4rem;
  align-self: flex-start;
  margin-top: 6rem;
`;

export default Pallette;
