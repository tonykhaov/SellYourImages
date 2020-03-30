import React from "react";
import styled from "styled-components";

function AddImage() {
  return (
    <AddImageWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="icon-add"
      >
        <path
          class="secondary"
          fill-rule="evenodd"
          d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
        />
      </svg>
    </AddImageWrapper>
  );
}

const AddImageWrapper = styled.div`
  height: 357px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: 500;
  border: 1px dashed;
  cursor: pointer;
`;
export default AddImage;
