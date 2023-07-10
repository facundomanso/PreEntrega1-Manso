import React from 'react'
import cart from './assets/cart.svg';

const CartWidget = () => {
  return (
    <div className='cartWidget'>
    <img src={cart} alt='cart-widget' className='cartIcon'/>
    <p className='cartNumber'>0</p>
    </div>
  )
}

export default CartWidget