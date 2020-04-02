import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled_components';
import { blue, grey } from '../Utilities';

function OrderCart(props) {
    return (
        <OrderCartWrapper>
            <h1>My Cart</h1>
            <CloseCart onClick={props.toggle}>X</CloseCart>
            <ul>
                <li>1 item</li>
                <li>2nd item</li>
            </ul>
            <span>
                <h1>Total: 24,32€</h1>
                <ButtonCart>Pay</ButtonCart></span>
        </OrderCartWrapper>
    )
}

const OrderCartWrapper = styled.div`
    position: absolute;
    width: 25vw;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    background-color: white;
    top: 0;
    right: 0;
    color: black;
    padding: 48px 12px;
    cursor: default;

    &:hover {
        color: black;
    }

    @media (max-width: 1280px) {
        width: 50vw;
    }

    @media (max-width: 1024px) {
        width: 75vw;
    }

    @media(max-width: 768px) {
        width: 100vw;
    }
`;

const CloseCart = styled.div`
    position: absolute;
    top: 12px;
  right: 16px;
  cursor: pointer;
  font-size: 32px;
  font-weight: 700;
  color: ${grey[700]};
  &:hover {
      color: ${grey[800]};
  }
`

const ButtonCart = styled(Button)`
    background-color: ${blue[800]};
    width: calc(100% - 24px);
    box-shadow: none;
    color: white;
    font-weight: 700;
    border-top: 1px solid ${blue[400]};
    &:hover {
        box-shadow: none;
    }
    position: absolute;
    bottom: 32px;
    left: 12px;
    right: 12px;
`

export default OrderCart
