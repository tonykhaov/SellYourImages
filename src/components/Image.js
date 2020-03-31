import React from "react";
import {
  formatPrice,
  double_box_shadow,
  pink,
  grey,
  black
} from "../Utilities";
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
            par <span>{author}</span> !
          </Author>
          <PriceCartWrapper>
            <Price>{formatPrice(price)}</Price>
            <CartButton>Acheter</CartButton>
          </PriceCartWrapper>
        </ImageDescription>
      </ImageCard>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0 0 8px 8px;
  &:hover {
    box-shadow: ${double_box_shadow[3]};
    transform: translate(-2px, -2px);
    transition: all 0.1s ease-in;
  }
`;

const ImageCard = styled(Card)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  padding-bottom: 12px;
  border-radius: 0 0 8px 8px;
`;

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow-wrap: break-word;
  padding: 24px 24px;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

const Author = styled.p`
  margin: 12px 0 16px;
  color: ${grey[600]};
  span {
    color: ${grey[700]};
  }
`;

const PriceCartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${black[900]};
`;

const CartButton = styled(Button)`
  box-shadow: none;
  background: ${pink.vivid[600]};
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  &:hover {
    box-shadow: none;
    background: ${pink.vivid[400]};
  }
`;
export default Image;
