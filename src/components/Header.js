import React from 'react';

import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { StyledHeader } from '../styles/Header.styled';

import Button from './common/Button';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>Pixellent</h1>
        </Link>
        <Button>
          <FaQuestionCircle />
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
