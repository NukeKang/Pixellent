import React from 'react';

import { FaQuestionCircle } from 'react-icons/fa';

import { Button } from '../styles/Button.styled';
import { StyledHeader } from '../styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Pixellent</h1>
        <Button>
          <FaQuestionCircle />
        </Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
