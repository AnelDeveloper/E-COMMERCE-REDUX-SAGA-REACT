import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

import { useHistory } from 'react-router-dom';

import Button from '../buttom-component/buttom-comp';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart-actions';


import './cart-dropwdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? (
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) ) : (        
          <span className='empty-message'>Empty Cart </span>
        )
    
      }
      </div>
      <Button onClick={() => { history.push('/checkout');
         dispatch(toggleCartHidden())}}>GO TO CHECKOUT</Button>
    </div>
  )};
  
  
  export default CartDropdown;