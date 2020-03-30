import React from "react";
import Portal from "./Portal";
import styled from "styled-components";
import { Card } from "../styled_components";
function Modal(props) {
  const { children, on, toggle } = props;
  return (
    <Portal>
      {on && (
        <ModalWrapper>
          <ModalCard>{children}</ModalCard>
          <Background />
        </ModalWrapper>
      )}
    </Portal>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  z-index: 10;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
export default Modal;
