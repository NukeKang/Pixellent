import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NotFound from './components/NotFound';
import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';
import useStore from './store/store';
import { makeArray } from './utils/makeArray';
import { initialSetup } from './utils/start';

//theme은 따로 파일만들어서 관리하기.
const theme = {
  colors: {
    header: '#2C3639',
    body: '#fff',
    footer: '#003333',
  },
};

const App = () => {
  const { rows, columns, baseColor } = useStore();

  useEffect(() => {
    initialSetup(localStorage);
  }, []);

  useEffect(() => {
    useStore.setState({ canvas: makeArray(rows, columns, baseColor) });
  }, [rows, columns]);

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
