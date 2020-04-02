import React from "react";
import styled from "styled-components";
import { blue, grey } from "../Utilities";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import OrderCart from "./OrderCart";

function Header(props) {
  const { username } = props.match.params;
  return (
    <><HeaderWrapper>
      <LoginWrapper>
        {username && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              <path
                d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
                transform="translate(0 -1)"
              />
            </svg>
            <p>{username}</p>
          </>
        )}
      </LoginWrapper>
      <Link to="/">
        <h1>Sell Your Images</h1>
      </Link>
      <CartWrapper>
        {username && (
          <Toggle>
            {({ on, toggle }) => (
              <>
                <span onClick={toggle}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
                  <path d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z" />
                </svg>
                  <p>Panier</p></span>
                {on && <OrderCart toggle={toggle} order={props.order} imagesHook={props.imagesHook} />}
              </>
            )}
          </Toggle>
        )}
      </CartWrapper>
    </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  min-height: 72px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${blue[800]};
  color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  @media (max-width: 480px) {
    &  {
      padding: 0 6px;
    }
  }
`;

const LoginWrapper = styled.div`
  height: 100%;
  max-width: 100px;
  color: ${grey[100]};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-overflow: clip;
  overflow: hidden;
  overflow-wrap: break-word;
  svg {
    height: calc(72px - 24px);
    width: calc(72px - 24px);
    fill: ${grey[100]};
  }

  @media (max-width: 480px) {
    svg  {
      height: calc(72px - 32px);
      width: calc(72px - 32px);
    }
  }
`;
const CartWrapper = styled(LoginWrapper)`
  cursor: pointer;
  &:hover {
    color: ${grey[400]};
    svg {
      fill: ${grey[400]};
    }
  }
`;

export default Header;
