import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

import { withRouter } from 'react-router';

import Button from '../buttom-component/buttom-comp';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-actions';


import './cart-dropwdown.scss';

const CartDropdown = ({ cartItems, history , dispatch}) => (
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
      <Button onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden())}}>GO TO CHECKOUT</Button>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));