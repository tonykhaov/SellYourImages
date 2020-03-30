import React from "react";
import { formatPrice, double_box_shadow, pink } from "../Utilities";
import styled from "styled-components";
import { Card, Button } from "../styled_components";

function Image(props) {
  const { name, price, author, url } = props.image;
  return (
    <ImageWrapper>
      <ImageCard>
        <img height="224px" src={url} alt={name} />
        <ImageDescription>
          <h1>{name}</h1>
          <Author>
            Vendu par <strong>{author}</strong>.
          </Author>
          <Price>{formatPrice(price)}</Price>
          <AddCart>
            <AddCartButton>Acheter</AddCartButton>
          </AddCart>
        </ImageDescription>
      </ImageCard>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  overflow: hidden;
  &:hover {
    box-shadow: ${double_box_shadow[3]};
    transform: translate(-2px, -2px);
    transition: all 0.1s ease-in;
  }
  position: relative;
`;

const ImageCard = styled(Card)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  padding-bottom: 24px;
`;

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 6px 8px;
  h1 {
    font-size: 24px;
  }
`;

const Author = styled.p`
  margin: 6px 0 12px 0;
`;

const Price = styled.p`
  font-size: 24px;
`;

const AddCart = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const AddCartButton = styled(Button)`
  box-shadow: none;
  background: ${pink.vivid[600]};
  color: white;
  font-size: 14px;
  font-weight: 800;
  border-radius: 4px;
  &:hover {
    box-shadow: none;
    background: ${pink.vivid[400]};
  }
`;
export default Image;
