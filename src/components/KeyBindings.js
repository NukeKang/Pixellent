import React from 'react';

import { FaEraser, FaPaintBrush, FaEyeDropper, FaUndo } from 'react-icons/fa';
import { RiPaintFill } from 'react-icons/ri';
import styled from 'styled-components';

const KeyBindings = () => {
  return (
    <Wrapper>
      <Title>Shortcuts Keys</Title>
      <Category>History</Category>
      <ShortcutList>
        <Shortcut>
          <FaUndo /> Undo : Command + Z
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

export default KeyBindings;
