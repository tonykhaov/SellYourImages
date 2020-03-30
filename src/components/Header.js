import React from "react";
import styled from "styled-components";
import { blue } from "../Utilities";
import Toggle from "./Toggle";
import Modal from "./Modal";
function Header() {
  return (
    <HeaderWrapper>
      <Toggle>
        {({ on, toggle }) => (
          <LoginWrapper onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="icon-user"
            >
              <path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              <path
                class="secondary"
                d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
                transform="translate(0 -1)"
              />
            </svg>
            <p>Se connecter</p>
            <Modal on={on} toggle={toggle}>
              <h1>Test</h1>
            </Modal>
          </LoginWrapper>
        )}
      </Toggle>
      <h1>Sell Your Images</h1>
      <CartWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="icon-shopping-cart"
        >
          <path
            class="primary"
            d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
          />
          <path
            class="secondary"
            d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z"
          />
        </svg>
        <p>Panier</p>
      </CartWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: ${blue.vivid[1000]};
  color: white;
`;

const LoginWrapper = styled.div`
  width: 96px;
  height: 72px;
  background: red;
  cursor: pointer;
  color: black;
`;
const CartWrapper = styled(LoginWrapper)``;
export default Header;
