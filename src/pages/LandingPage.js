import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/editor');
  };

  return (
    <>
      <div>LandingPage</div>
      <button onClick={handleStartClick}>START</button>
    </>
  );
};

export default LandingPage;
