import React from 'react';

import { atom, useAtom } from 'jotai';
import { CirclePicker } from 'react-color';

import { panelHeightAtom } from './PanelDimensions';

const LeftSidebar = () => {
  const [panelWidthAtom] = useAtom(panelHeightAtom);

  console.log(panelWidthAtom);
  return (
    <div>
      <CirclePicker />
    </div>
  );
};

export default LeftSidebar;
