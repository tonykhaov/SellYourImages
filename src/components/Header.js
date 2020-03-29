import React from "react";
import styled from "styled-components";
import { blue, box_shadow } from "../Utilities";

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
  background-color: ${blue[900]};
  color: white;
  text-shadow: ${box_shadow[1]};
`;

export default Header;
