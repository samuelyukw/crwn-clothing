import React from 'react'
import {CartItemContainer, Image, ItemDetailsContainer, Details} from './cart-item.styles'

const CartItem = ({item: {name, imageUrl, price, quantity}}) => (
  <CartItemContainer>
    <Image src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <Details>{name}</Details>
      <Details>{quantity} x ${price}</Details>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
