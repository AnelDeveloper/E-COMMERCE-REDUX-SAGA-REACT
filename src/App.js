import React from 'react';

import { Switch, Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';



import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sing-in-and-signup/sing-in-and-signup';
import Header from './components/header-component/header-component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { izberiTrenutnogUsera } from './redux/user/user-selector';
import { setCurrentUser } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';

import checkout from './pages/checkout/checkout-comp';




class  App extends React.Component {

unsubscribeFromAuth = null;


componentDidMount() {

  const { setCurrentUser} = this.props;




this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  if (userAuth) {
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(onSnapshot => {
        this.props.setCurrentUser({
          id: onSnapshot.id,
          ...onSnapshot.data()
        });
    });
  }

  setCurrentUser(userAuth);



});
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
  
}


render() {
  return(
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp />)} />
<Route exact path='/checkout' component={checkout} />
    </Switch>
    </div>
  )
   }
};

const mapStateToProps = createStructuredSelector ({
  currentUser: izberiTrenutnogUsera
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps )(App);
