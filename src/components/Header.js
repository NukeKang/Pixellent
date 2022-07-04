import React from 'react';

import { Button } from '../styles/Button.styled';
import { StyledHeader } from '../styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Pixellent</h1>
        <Button>?</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
