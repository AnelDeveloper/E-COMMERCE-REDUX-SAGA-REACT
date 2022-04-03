import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.comp';

import { selectCollection } from '../../redux/shop/shop-selector.js';

import './category.scss';

const CategoryPage = ({ category }) => {
  const { title , items } = category;
  return (
    <div className='category-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
:
