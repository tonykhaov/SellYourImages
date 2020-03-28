import React from "react";
import styled from "styled-components";
import { grey } from "../Utilities";

function Header() {
  return (
    <HeaderWrapper>
      <h1>Sell Your Images</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid ${grey[300]};
`;

export default Header;
