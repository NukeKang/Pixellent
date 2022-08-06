import React, { useEffect } from 'react';

import useUndoableState from '@jeremyling/react-use-undoable-state';
import styled from 'styled-components';

import useStore from '../store/store';
import { copyArray } from '../utils/copyArray';
import { makeArray } from '../utils/makeArray';

import Button from './common/Button';
import Grid from './Grid';

const PixelCanvas = () => {
  const { rows, columns, baseColor, canvas, selectedColor, selectedTools } =
    useStore();

  const init = { canv: canvas.slice() };

  const {
    state: canv,
    setState: setCanv,
    index: canvasIndex,
    goBack: undo,
  } = useUndoableState(init, 1);

  const canUndo = canvasIndex > 0;

  const update = (x, y) => {
    setCanv({ canv: copyArray(canvas) });

    if (canvas[y][x] !== selectedColor) {
      canvas[y][x] = selectedColor;
    }

    if (selectedTools === 'ERASER') {
      canvas[y][x] = baseColor;
    }
    if (selectedTools === 'BUCKET') {
      setCanv({ canv: copyArray(canvas) });
    }
  };

  useEffect(() => {
    useStore.setState({ canvas: makeArray(rows, columns, baseColor) });
  }, [rows, columns]);

  useEffect(() => {
    const handleKeyboardEvent = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
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
  }, [canv, canvasIndex, selectedTools]);

  return (
    <CanvasContainer>
      <ButtonWrapper>
        <Button
          onClick={() => {
            useStore.setState({ canvas: canv.canv });
            undo();
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
