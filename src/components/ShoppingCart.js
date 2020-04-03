import React from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'
import OrderCart from './OrderCart'
import { grey } from '../Utilities'

function ShoppingCart(props) {
    return (
        <Toggle>
            {({ on, toggle }) => (
                <CartIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={toggle}>
                        <path d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
                        <path d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z" />
                    </svg>
                    <p>Cart</p>
                    {on && <OrderCart toggle={toggle} order={props.order} images={props.images} removeFromOrder={props.removeFromOrder} />}
                </CartIcon>
            )}
        </Toggle>
    )
}


const CartIcon = styled.div`
    width: 60px;
    height: 72px;
    position: fixed;
    top: 0;
    right: 24px;
    z-index: 10;
    color: ${grey[100]};
    text-align: center;
    cursor: pointer;
    svg {
    height: 48px;
    width: 48px;
    fill: ${grey[100]};
    }
    &:hover {
        color: ${grey[500]};
        svg {
            fill: ${grey[500]};
        }
    }
`
export default ShoppingCart
