import React, { useEffect } from 'react';

import shortid from 'shortid';

import useStore from '../store/store';
import { initialSetup } from '../utils/start';
import { saveProjectToStorage } from '../utils/storage';

import Button from './common/Button';

const Save = () => {
  const { rows, columns, canvas } = useStore();

  useEffect(() => {
    initialSetup(localStorage);
  }, []);

  const save = () => {
    const drawingToSave = {
      paletteGridData: canvas,
      columns: columns,
      rows: rows,
      id: shortid.generate(),
    };

    if (saveProjectToStorage(localStorage, drawingToSave)) {
      alert('Save Complete!');
    }
  };

  return (
    <Button onClick={save} width={150}>
      SAVE
    </Button>
  );
};

export default Save;
