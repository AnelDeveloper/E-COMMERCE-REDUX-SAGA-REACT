
import React,{useEffect} from 'react';

import { connect } from 'react-redux';


import { Route } from 'react-router'; 

import CollectionsOverviewContainer from '../../components/collection-overview-comp/collection-overview-containter';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions.js';




const ShopPage = ({ fetchCollectionsStart , match }) =>  {
    useEffect(() => {
        fetchCollectionsStart()
    
    },[fetchCollectionsStart]);
  
      return (
        <div className='shop-page'>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </div>
      );
    }
  
  
  const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(ShopPage);