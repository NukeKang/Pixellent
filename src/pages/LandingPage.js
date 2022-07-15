import React, { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { textIntro } from '../components/Animate';
import Button from '../components/common/Button';

const LandingPage = () => {
  const navigate = useNavigate();
  let intro = useRef(null);

  const handleStartClick = () => {
    navigate('/editor');
  };

  useEffect(() => {
    textIntro(intro);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Intro ref={(element) => (intro = element)}>
          <span>Pixel Arts in Pixellent are fun!</span>
          <ButtonWrapper>
            <Button onClick={handleStartClick}>START</Button>
          </ButtonWrapper>
        </Intro>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: url('backgroundimage.png') no-repeat center;
  background-size: cover;
  height: 100vh;
  ::before {
    content: '';
    opacity: 0.3;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }
`;

const Wrapper = styled.div`
  padding: 0 48px;
`;

const Intro = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1px;
  background: radial-gradient(circle, #80ffc1 0%, #ff6161 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: animatedGradient 2s infinite ease;
  animation-direction: alternate;
  margin-top: 250px;

  @keyframes animatedGradient {
    from {
      background-size: 100%;
    }

    to {
      background-size: 250%;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export default LandingPage;
