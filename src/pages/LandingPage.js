import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../components/common/Button';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/editor');
  };

  return (
    <>
      <div>LandingPage</div>
      <Button onClick={handleStartClick}>START</Button>
    </>
  );
};

export default LandingPage;
