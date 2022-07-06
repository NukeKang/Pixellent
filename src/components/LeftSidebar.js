import React from 'react';

import { CirclePicker } from 'react-color';

import useStore from '../store/store';

const LeftSidebar = () => {
  const { selectedColor } = useStore();

  return (
    <div>
      <CirclePicker
        color={selectedColor}
        onChangeComplete={(color) => {
          useStore.setState({ selectedColor: color.hex });
        }}
      />
    </div>
  );
};

export default LeftSidebar;
