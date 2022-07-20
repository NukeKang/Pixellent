import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../pages/LandingPage';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
});

test('배너 문구가 보여야 한다.', () => {
  const target = screen.getByText(/Pixellent/i);

  expect(target).toBeInTheDocument();
});

test('배너의 초기 색상이 일치해야 한다.', () => {
  const target = screen.getByText(/Pixellent/i);

  expect(target).toHaveStyle({ color: '#dcd7c9' });
});

test('배너를 클릭하면, LandingPage로 이동해야 한다.', () => {
  const target = screen.getByText(/Pixellent/i);

  userEvent.click(target);

  expect(
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    ),
  );
});

test('?버튼을 누르면, 안내 모달창이 보여야 합니다.', () => {
  userEvent.click(screen.getByTestId('information'));

  const target = screen.getByText(/Shortcuts Keys/i);

  expect(target).toBeInTheDocument();
});
