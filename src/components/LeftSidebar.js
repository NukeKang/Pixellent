import React from 'react';

import { atom, useAtom } from 'jotai';
import { CirclePicker } from 'react-color';

export const selectedColorAtom = atom('#f44336');

const LeftSidebar = () => {
  const [selectedColor, setColor] = useAtom(selectedColorAtom);

  const changedColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <CirclePicker color={selectedColor} onChangeComplete={changedColor} />
    </div>
  );
};

export default LeftSidebar;
