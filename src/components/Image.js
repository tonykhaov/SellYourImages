import React from "react";
import { formatPrice } from "../Utilities";
import styled from "styled-components";

function Image(props) {
  const { name, price } = props.image;
  return (
    <ImageWrapper>
      <img height="224px" src={`/images/${props.index}.jpg`} alt={name} />
      <h1>{name}</h1>
      <p>{formatPrice(price)}</p>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  overflow: hidden;
  height: 300px;

  h1 {
    display: inline;
  }
`;

export default Image;
