import React from 'react';

import { connect } from 'react-redux';



import Button from '../buttom-component/buttom-comp';

import { addItem } from '../../redux/cart/cart-actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item , addItem  }) => { 
    const {  name , price , imageUrl } = item;

    return (

    
    <div className='collection-item'>
    <div className='image' 
    style={{
        backgroundImage: `url(${imageUrl})`}}
    
    />

    <div className='collection-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    
    </div>
    
    <Button onClick={() => addItem(item)} inverted>
    Add to cart
  </Button>
    
    </div>
    )
    };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
