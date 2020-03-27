import React from "react";
import styled from "styled-components";

function Store(props) {
  return <StoreGrid></StoreGrid>;
}

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid;
  height: 90vh;
`;
export default Store;
