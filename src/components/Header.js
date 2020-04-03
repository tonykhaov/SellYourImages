import React, { Fragment } from "react";
import styled from "styled-components";
import { blue, grey } from "../Utilities";
import { Link } from "react-router-dom";

function Header(props) {
  const { username } = props.match.params;
  return (
    <Fragment>
      <HeaderWrapper>
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
        <h1>
          <Link to="/">
            Sell Your Images
        </Link>
        </h1>
      </HeaderWrapper>
    </Fragment>
  );
}

const HeaderWrapper = styled.header`
  min-height: 72px;
  text-align: center;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
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
    height: 48px;
    width: 48px;
    fill: ${grey[100]};
  }
`;

export default Header;
