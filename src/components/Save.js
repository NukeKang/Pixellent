import React from 'react';

import shortid from 'shortid';

import { useStore } from '../store/store';
import { saveProjectToStorage } from '../utils/storage';

import Button from './common/Button';

const Save = () => {
  const { canvas, column, row } = useStore();

  const save = () => {
    const drawingToSave = {
      paletteGridData: canvas,
      columns: column,
      rows: row,
      id: shortid.generate(),
    };

    if (saveProjectToStorage(localStorage, drawingToSave)) {
      console.log('Save Complete!');
    }
  };

  return <Button onClick={save}>Save</Button>;
};

export default Save;
