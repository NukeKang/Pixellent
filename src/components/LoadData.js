import React, { useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';

import ModalPortal from '../ModalPortal';
import { useStore } from '../store/store';
import { getDataFromStorage, removeProjectFromStorage } from '../utils/storage';

import Button from './common/Button';
import Modal from './common/Modal';
import Preview from './Preview';

const LoadData = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleModalOpen = () => {
    setIsShowing(true);
  };

  const clickImage = (data) => {
    useStore.setState({
      canvas: data.paletteGridData,
    });

    setIsShowing(false);
  };

  const removeFromStorage = (key, e) => {
    e.stopPropagation();
    if (localStorage) {
      const removed = removeProjectFromStorage(localStorage, key);
      if (removed) {
        setIsShowing(false);
        alert('Delete Complete!');
      }
    }
  };

  const showDrawing = () => {
    if (localStorage) {
      const dataStored = getDataFromStorage(localStorage);
      if (dataStored) {
        return dataStored.map((data, i) => {
          const element = {
            id: data.id,
            columns: data.columns,
            rows: data.rows,
            paletteGridData: data.paletteGridData,
          };

          return (
            <div
              key={element.id}
              onClick={() => {
                clickImage(element);
              }}
            >
              <Preview key={element.id} data={element} />
              <Button
                onClick={(event) => {
                  removeFromStorage(i, event);
                }}
              >
                <FaTrashAlt />
              </Button>
            </div>
          );
        });
      }
    }

    return [];
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Load</Button>
      {isShowing && (
        <ModalPortal>
          <Modal content={showDrawing()} onCloseModal={setIsShowing}></Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default LoadData;
