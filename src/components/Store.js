import React from "react";
import styled from "styled-components";
import Image from "./Image";
import AddImage from "./AddImage";

function Store(props) {
  return (
    <StoreWrapper>
      {props.images && (
        <ImagesGrid>
          {Object.keys(props.images)
            .sort((a, b) => a + b)
            .map(key => (
              <Image
                key={key}
                image={props.images[key]}
                index={key}
                deleteImage={props.deleteImage}
              />
            ))}
          <AddImage addImage={props.addImage} {...props} />
        </ImagesGrid>
      )}
    </StoreWrapper>
  );
}

const StoreWrapper = styled.div`
  min-height: calc(100vh - 72px);
`;

const ImagesGrid = styled.div`
  max-width: 1440px;
  padding-top: 32px;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 32px;
`;
export default Store;
