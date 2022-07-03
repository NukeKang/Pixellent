import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Editor from './pages/Editor';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
};

export default App;
