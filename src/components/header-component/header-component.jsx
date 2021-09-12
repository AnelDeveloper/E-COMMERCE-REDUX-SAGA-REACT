import React from 'react';

import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';


import './header.styles.scss';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown';

import { sakrijKarticu } from '../../redux/cart/cart-selector';

import { izberiTrenutnogUsera } from '../../redux/user/user-selector';
 

import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({currentUser , hidden }) => (
    <div className='header'>
    <Link  className='logo-container' to='/'> 

    <Logo className='logo'> </Logo>


    
    
    </Link>

    <div className='options'>
    <Link className='option' to='/shop'>
    SHOP
    </Link>
    <Link className='option'>
    
    CONTACT
    
    </Link>

    {
        currentUser ? 
        <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'> SIGN IN </Link>
    }
    <CartIcon/>
    </div>   
     
    {hidden ? null : <CartDropdown />}

    </div>
);
const mapStateToProps = createStructuredSelector({ 
    currentUser: izberiTrenutnogUsera,
    hidden: sakrijKarticu

});











export default connect(mapStateToProps)(Header);