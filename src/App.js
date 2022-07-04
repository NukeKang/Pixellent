import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';
//theme은 따로 파일만들어서 관리하기.
const theme = {
  colors: {
    header: '#000',
    body: '#fff',
    footer: '#003333',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
