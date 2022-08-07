import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import LandingPage from '../pages/LandingPage';

beforeEach(() => {
  render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
  );
});
test('사이트 접속 시, 환영 문구가 보여야 한다.', () => {
  const headerElement = screen.getByText(/Pixellent are fun/i);

  expect(headerElement).toBeInTheDocument();
});

test('START버튼의 초기 색상이 일치해야 한다.', () => {
  const target = screen.getByRole('button', { name: 'START' });
  expect(target).toHaveStyle({ backgroundColor: '#fff' });
});

test('START 버튼을 누르면, Header 컴포넌트가 렌더링 돼야 한다.', () => {
  const target = screen.getByRole('button', { name: 'START' });

  userEvent.click(target);

  expect(
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ),
  );
});
