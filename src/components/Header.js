import React, { useState } from 'react';

import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ModalPortal from '../ModalPortal';

import Button from './common/Button';
import Modal from './common/Modal';
import KeyBindings from './KeyBindings';

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleModalOpen = () => {
    setIsShowing(true);
  };

  return (
    <Container>
      <Link to="/">
        <h1>Pixellent</h1>
      </Link>
      <Button onClick={handleModalOpen}>
        <FaQuestionCircle data-testid="information" />
      </Button>
      {isShowing && (
        <ModalPortal>
          <Modal content={KeyBindings()} onCloseModal={setIsShowing}></Modal>
        </ModalPortal>
      )}
    </Container>
  );
};

const Container = styled.header`
  background-color: #2c3639;
  box-shadow: 0 0 3px #000;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  h1 {
    margin-left: 6px;
    color: #dcd7c9;

    @media screen and (max-width: 200px) {
      display: none;
    }
  }
`;

export default Header;
