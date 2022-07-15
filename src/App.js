import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NotFound from './components/NotFound';
import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';
import { initialSetup } from './utils/start';

//theme은 따로 파일만들어서 관리하기.
const theme = {
  colors: {
    header: '#000',
    body: '#fff',
    footer: '#003333',
  },
};

const App = () => {
  useEffect(() => {
    initialSetup(localStorage);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
