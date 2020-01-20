import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Homepage from "./components/homepage/Homepage";
import ShopPage from "./components/shoppage/ShopPage";
import Header from "./components/layout/Header";
import SignInAndSignUp from "./components/sign-in-and-sign-up/SignInAndSignUp";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
