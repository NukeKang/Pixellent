import React from 'react';

import styled from 'styled-components';

const Modal = ({ content, onCloseModal }) => {
  const handleClick = () => {
    onCloseModal(false);
  };

  return (
    <ModalWrapper onClick={handleClick}>
      <ModalInner onClick={(event) => event.stopPropagation()}>
        <ModalCloseButton onClick={handleClick}>X</ModalCloseButton>
        <ModalContent>{content}</ModalContent>
      </ModalInner>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 15px 5px #000000;
  width: 800px;
  height: 60vh;
`;

const ModalCloseButton = styled.div`
  font-size: 25px;
  cursor: pointer;
  float: right;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

export default Modal;
