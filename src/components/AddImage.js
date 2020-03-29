import React from "react";
import styled from "styled-components";

function AddImage() {
  return <AddImageWrapper>+</AddImageWrapper>;
}

const AddImageWrapper = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  border: 1px solid;
`;
export default AddImage;
