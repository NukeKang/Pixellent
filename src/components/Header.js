import React, { useState } from 'react';

import {
  FaEraser,
  FaPaintBrush,
  FaQuestionCircle,
  FaEyeDropper,
} from 'react-icons/fa';
import { RiPaintFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ModalPortal from '../ModalPortal';
import { StyledHeader } from '../styles/Header.styled';

import Button from './common/Button';
import Modal from './common/Modal';

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleModalOpen = () => {
    setIsShowing(true);
  };

  const showKeyBindings = () => {
    return (
      <Wrapper>
        <Title>Keyboard Shortcuts</Title>
        <Category>History</Category>
        <ShortcutList>
          <Shortcut>Undo : CTRL + Z</Shortcut>
        </ShortcutList>
        <Category>Switch Tool</Category>
        <ShortcutList>
          <Shortcut>
            <FaPaintBrush /> Brush : Q
          </Shortcut>
          <Shortcut>
            <FaEraser /> Eraser : W
          </Shortcut>
          <Shortcut>
            <RiPaintFill /> Bucket : E
          </Shortcut>
          <Shortcut>
            <FaEyeDropper /> Eyedropper : R
          </Shortcut>
        </ShortcutList>
      </Wrapper>
    );
  };

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>Pixellent</h1>
        </Link>
        <Button onClick={handleModalOpen}>
          <FaQuestionCircle />
        </Button>
        {isShowing && (
          <ModalPortal>
            <Modal
              content={showKeyBindings()}
              onCloseModal={setIsShowing}
            ></Modal>
          </ModalPortal>
        )}
      </div>
    </StyledHeader>
  );
};

const Title = styled.h1`
  font-size: 1.3rem;
  background-color: black;
  color: white;
  padding: 6px;
  border-radius: 10px;
  top: 0;
`;

const Category = styled.h3`
  margin-top: 1.6em;
  font-size: 1.2em;
  border-bottom: 1px solid;
`;

const Wrapper = styled.div`
  padding: 2em;
  margin: 0 auto;
  width: 50%;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    padding: 1em 0;
    font-size: 0.8em;
  }
`;

const ShortcutList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Shortcut = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
`;

export default Header;
