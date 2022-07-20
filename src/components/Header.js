import React, { useState } from 'react';

import {
  FaEraser,
  FaPaintBrush,
  FaQuestionCircle,
  FaEyeDropper,
  FaUndo,
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
        <Title>Shortcuts Keys</Title>
        <Category>History</Category>
        <ShortcutList>
          <Shortcut>
            <FaUndo /> Undo : CTRL + Z
          </Shortcut>
        </ShortcutList>
        <Category>Tools</Category>
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
          <FaQuestionCircle data-testid="information" />
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
  background-color: black;
  color: white;
  padding: 6px;
  border-radius: 15px;
  top: 0;
  text-align: center;
  width: 500px;
`;

const Category = styled.h3`
  margin-top: 1.6em;
  font-size: 1.4em;
  border-bottom: 1px solid;
`;

const Wrapper = styled.div`
  padding: 2em;
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    padding: 1em 0;
    font-size: 0.8em;
  }
`;

const ShortcutList = styled.div``;

const Shortcut = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
`;

export default Header;
