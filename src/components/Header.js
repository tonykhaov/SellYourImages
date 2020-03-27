import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header({ username }) {
  return (
    <HeaderGrid>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <Nav>
        {username && (
          <NavMenu>
            <NavLink>
              <a href="#">Acheter</a>
            </NavLink>
            <NavLink>
              <a href="#">Vendre</a>
            </NavLink>
            <NavLink>
              <a href="#">Editer</a>
            </NavLink>
          </NavMenu>
        )}
      </Nav>

      <User>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="icon-user"
          width="48px"
        >
          <path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
          <path
            class="secondary"
            d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
          />
        </svg>
        {username && <p>{username}</p>}
      </User>
    </HeaderGrid>
  );
}

const HeaderGrid = styled.header`
  background-color: #48bb78;
  height: 10vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 8fr 1fr;
`;

const Nav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

const NavLink = styled.li`
  padding: 32px;
  font-size: 24px;
`;

const User = styled.div`
  text-overflow: clip;
  text-align: center;
  width: 100%;
  overflow: hidden;
`;
export default Header;
