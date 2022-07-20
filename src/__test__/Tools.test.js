import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-canvas-mock';
import { BrowserRouter } from 'react-router-dom';

import Editor from '../pages/Editor';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Editor />
    </BrowserRouter>,
  );
});

test('brush버튼이 보여야 한다.', () => {
  expect(screen.getByTestId('paint')).toBeInTheDocument();
});

test('eraser버튼이 보여야 한다.', () => {
  expect(screen.getByTestId('eraser')).toBeInTheDocument();
});

test('eyedropper버튼이 보여야 한다.', () => {
  expect(screen.getByTestId('eyedropper')).toBeInTheDocument();
});

test('bucket버튼이 보여야 한다.', () => {
  expect(screen.getByTestId('bucket')).toBeInTheDocument();
});

test('brush버튼을 클릭하면 colorPicker가 보여야 한다.', () => {
  userEvent.click(screen.getByTestId('paint'));

  expect(screen.getByRole('textbox', { name: 'hex' })).toBeInTheDocument();
});
