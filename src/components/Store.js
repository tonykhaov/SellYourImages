import React from "react";
import styled from "styled-components";
import Image from "./Image";
import AddImage from "./AddImage";

function Store(props) {
  return (
    <StoreWrapper>
      <StoreTitle></StoreTitle>
      {props.images && (
        <ImagesGrid>
          {Object.keys(props.images).map(key => (
            <Image key={key} image={props.images[key]} index={key} />
          ))}
          <AddImage />
        </ImagesGrid>
      )}
    </StoreWrapper>
  );
}

const StoreWrapper = styled.div`
  min-height: calc(100vh - 72px);
`;

const StoreTitle = styled.div`
  text-align: center;
  padding: 16px 0 24px;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

const ImagesGrid = styled.div`
  max-width: 1360px;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 32px;
`;
export default Store;
