import React, { Fragment } from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'
import OrderCart from './OrderCart'
import { grey, pink, blue } from '../Utilities'

function ShoppingCart(props) {
    const totalCount = Object.keys(props.order).reduce((prevTotal, key) => {
        const image = props.images[key];
        const count = props.order[key];
        if (image) {
            return prevTotal + count;
        }
        return prevTotal;
    }, 0);
    return (
        <Toggle>
            {({ on, toggle }) => (
                <Fragment>
                    <CartIcon onClick={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
                            <path d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z" />
                        </svg>
                        <p>Cart <Count>({totalCount})</Count></p>
                    </CartIcon>
                    {on && <OrderCart toggle={toggle} order={props.order} images={props.images} removeFromOrder={props.removeFromOrder} />}
                </Fragment>
            )}
        </Toggle>
    )
}


const CartIcon = styled.div`
    width: 80px;
    background-color: ${blue[900]};
    border-radius: 50%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    flex-direction: column;
    bottom: 4px;
    right: 24px;
    z-index: 10;
    color: ${grey[100]};
    text-align: center;
    cursor: pointer;
    svg {
    height: 36px;
    width: 36px;
    fill: ${grey[100]};
    }

    &:hover {
        background-color: ${blue[800]};
    }
`

const Count = styled.span`
    color: ${pink.vivid[400]};
    font-weight: 900;
`
export default ShoppingCart
