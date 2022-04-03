import React from 'react';

import { connect  } from 'react-redux';

import { ClearItem  , removeQuantityItem , addItem} from '../../redux/cart/cart-actions';

import './checkout-styles.scss';


const CheckOutItem = ({ cartItem , removeITEM , addItem , removeQuantityItem }) => { 
    const { name, imageUrl , price, quantity } = cartItem;
    return ( 
    <div className='checkout-item'>
    <div className='image-container'>
    <img  src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
    <div className='arrow' onClick={() => removeQuantityItem(cartItem)}>&#10094;</div>
    <span className='value'> {quantity} </span>
    <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => removeITEM(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    removeITEM: item => dispatch(ClearItem(item)), 
    addItem: item => dispatch(addItem(item)),
    removeQuantityItem: item => dispatch(removeQuantityItem(item))
  });



export default connect(
    null,
    mapDispatchToProps
  )(CheckOutItem);

