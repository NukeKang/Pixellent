import React, { useEffect } from 'react';

import useUndoableState from '@jeremyling/react-use-undoable-state';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

import useStore from '../store/store';

import Button from './common/Button';
import Grid from './Grid';

const copyArray = (array) => {
  let newArray = '';

  newArray = cloneDeep(array);

  return newArray;
};

const PixelCanvas = () => {
  const { canvas, selectedColor, selectedTools } = useStore();

  const init = { canv: copyArray(canvas) };

  const {
    state: canv,
    setState: setCanv,
    index: canvasIndex,
    lastIndex: canvasLastIndex,
    goBack: undo,
    goForward: redo,
  } = useUndoableState(init, 1);

  const canUndo = canvasIndex > 0;

  const update = (x, y) => {
    setCanv({ canv: copyArray(canvas) });

    if (canvas[y][x] !== selectedColor) {
      canvas[y][x] = selectedColor;
    }

    if (selectedTools === 'ERASER') {
      canvas[y][x] = '#fff';
    }
    if (selectedTools === 'BUCKET') {
      setCanv({ canv: copyArray(canvas) });
    }
  };

  useEffect(() => {
    const handleKeyboardEvent = (event) => {
      if (event.metaKey && event.key === 'z') {
        if (canUndo) {
          useStore.setState({ canvas: canv.canv });
          undo();
        } else {
          return;
        }
      }
      if (event.key === 'q') {
        useStore.setState({ selectedTools: 'BRUSH' });
      }
      if (event.key === 'w') {
        useStore.setState({ selectedTools: 'ERASER' });
      }
      if (event.key === 'e') {
        useStore.setState({ selectedTools: 'BUCKET' });
      }
      if (event.key === 'r') {
        useStore.setState({ selectedTools: 'EYEDROPPER' });
      }
    };

    document.addEventListener('keydown', handleKeyboardEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyboardEvent);
    };
  }, [canv, canvasIndex, canvasLastIndex, selectedTools]);

  return (
    <CanvasContainer>
      <ButtonWrapper>
        <Button
          onClick={() => {
            undo();
            useStore.setState({ canvas: canv.canv });
          }}
          disabled={!canUndo}
        >
          Undo
        </Button>
      </ButtonWrapper>
      <Grid update={update} />
    </CanvasContainer>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #303f46;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

export default PixelCanvas;
