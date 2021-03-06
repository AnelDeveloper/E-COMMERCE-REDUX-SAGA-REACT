import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import { selectCartItems , izaberiKarticeTotal} from '../../redux/cart/cart-selector';


import './checkout.style.scss';


const checkout = ({ cartItems , total }) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
    <div className='header-block'>
    <span>Product</span>
    </div>
    <div className='header-block'>
    <span>Description</span>
    </div>
    <div className='header-block'>
    <span>Quantity</span>
    </div>
    <div className='header-block'>
    <span>Prtice</span>
    </div>
    <div className='header-block'>
    <span>Remove</span>
    </div>
    </div>

    {
        cartItems.map(cartItem =>
<CheckOutItem key={cartItem.id} cartItem={cartItem} 

/>      
      )
    }

   

    <div className='total'>

    <span>TOTAL: ${total}</span>
    
    </div>
    
    
    </div> 
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: izaberiKarticeTotal

})


export default connect(mapStateToProps)(checkout);

