import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './common/Button';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Link to="/editor">
        <Button>GOBACK</Button>
      </Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/404.png');
  background-size: cover;
`;

export default NotFound;
