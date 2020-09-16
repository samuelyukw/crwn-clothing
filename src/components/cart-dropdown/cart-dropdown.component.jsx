import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {CartItemsContainer, EmptyMessage, DropdownButton, CartDropdownContainer} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : 
        <EmptyMessage>Your cart is empty</EmptyMessage>
      }
    </CartItemsContainer>
    <DropdownButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
      GO TO CHECKOUT
    </DropdownButton>
  </CartDropdownContainer>
)


const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
