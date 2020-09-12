import React from 'react'
import {connect} from 'react-redux'
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
  const {name, imageUrl, price, quantity} = cartItem

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='name'>{name}</div>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <div className='price'>${quantity * price}</div>
      <div 
        className='remove-button' 
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
