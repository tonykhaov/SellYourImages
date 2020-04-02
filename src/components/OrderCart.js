import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled_components';
import { blue, grey, formatPrice } from '../Utilities';

function OrderCart(props) {
    const renderOrder = key => {
        const image = props.imagesHook[key];
        const count = props.order[key];
        if (!image) return null;
        return (
            <li key={key}>
                <span><p>Image:</p>{image.name}</span>
                <span><p>by:</p>{image.author}</span>
                <span><p>price:</p>{formatPrice(image.price)}</span>
                <span><p>count:</p>{count}</span>
            </li>
        )
    }
    const orderIds = Object.keys(props.order);
    const total = orderIds.reduce((prevTotal, key) => {
        const image = props.imagesHook[key];
        const count = props.order[key];
        if (image) {
            return prevTotal + image.price * count;
        }
        return prevTotal;
    }, 0);
    return (
        <OrderCartWrapper>
            <h1>My Cart</h1>
            <hr />
            <CloseCart onClick={props.toggle}>X</CloseCart>
            <OrderItems>
                {orderIds.map(renderOrder)}
            </OrderItems>
            <TotalButtonWrapper>
                <h1>Total: {formatPrice(total)}</h1>
                <ButtonCart onClick={() => alert('Reach me at: tony.khaov@gmail.com ;)')}>Pay</ButtonCart>
            </TotalButtonWrapper>
        </OrderCartWrapper>
    )
}

const OrderCartWrapper = styled.div`
    position: absolute;
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    top: 0;
    right: 0;
    color: black;
    padding: 48px 12px;
    cursor: default;

    hr {
        background-color: ${grey[300]};
        height: 1px;
        border: none;
        margin: 12px 0 16px;
    }

    &:hover {
        color: black;
    }

    @media (max-width: 1280px) {
        width: 50vw;
        h1 {
        font-size: 36px;
        }
    }

    @media (max-width: 1024px) {
        width: 75vw;
        h1 {
        font-size: 48px;
        }
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

const OrderItems = styled.ul`
    text-align: left;
    overflow-y: scroll;
    padding-bottom: 72px;
`

const TotalButtonWrapper = styled.div`
    position: absolute;
    bottom: 32px;
    left: 12px;
    right: 12px;
`

const ButtonCart = styled(Button)`
    margin-top: 12px;
    background-color: ${blue[800]};
    width: calc(100% - 24px);
    box-shadow: none;
    color: white;
    font-size: 24px;
    font-weight: 700;
    border-top: 1px solid ${blue[400]};
    &:hover {
        box-shadow: none;
    }
`

export default OrderCart
