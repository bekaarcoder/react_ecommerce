import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import ShopPage from "./components/shoppage/ShopPage";
import Header from "./components/layout/Header";
import SignInAndSignUp from "./components/sign-in-and-sign-up/SignInAndSignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
