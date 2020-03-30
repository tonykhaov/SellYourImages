import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "./Image";
import { SAMPLE_IMAGES } from "../sample-images";
import AddImage from "./AddImage";

function Store(props) {
  useEffect(() => {
    props.setImages(SAMPLE_IMAGES);
  });
  return (
    <StoreWrapper>
      <StoreTitle></StoreTitle>
      {props.images && (
        <ImagesGrid>
          {Object.keys(props.images)
            .sort((a, b) => a - b)
            .map(key => (
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
  align-items: center;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-row-gap: 24px;
  grid-column-gap: 24px;
`;
export default Store;
