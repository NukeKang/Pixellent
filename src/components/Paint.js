import React, { useState } from 'react';

import { ChromePicker } from 'react-color';
import { FaPaintBrush } from 'react-icons/fa';

import useStore from '../store/store';

import Button from './common/Button';

const Paint = () => {
  const { selectedColor } = useStore();
  const popover = {
    position: 'absolute',
    zIndex: '2',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <FaPaintBrush />
      </Button>
      {displayColorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker
            color={selectedColor}
            onChangeComplete={(color) => {
              useStore.setState({ selectedColor: color.hex });
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default Paint;
