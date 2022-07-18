import React from 'react';

import styled from 'styled-components';

import { COLORS } from '../constants/constants';
import useStore from '../store/store';
import { makePalette } from '../utils/makePalette';

import Color from './Color';

const Palette = () => {
  const { selectedColor } = useStore();

  return (
    <PaletteBox>
      {makePalette(COLORS, selectedColor).map((color, index) => (
        <Color key={color + index} color={color} />
      ))}
    </PaletteBox>
  );
};

const PaletteBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17%, 1fr));
  width: 12rem;
`;

export default Palette;
