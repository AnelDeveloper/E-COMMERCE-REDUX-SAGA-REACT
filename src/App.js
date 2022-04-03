import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sing-in-and-signup/sing-in-and-signup";
import Header from "./components/header-component/header-component";

import checkout from "./pages/checkout/checkout-comp";

import { izberiTrenutnogUsera } from "./redux/user/user-selector";

import { checkUserSession } from "./redux/user/user-actions";

const App = () => {
  const currentUser = useSelector(izberiTrenutnogUsera);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // kako ovdje dispatch ustvari radi ? , kako on dispatchuje stvari preko useEffecta i useDispatch hooks-a
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
