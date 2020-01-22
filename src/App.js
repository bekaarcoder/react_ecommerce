import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";

import Homepage from "./components/homepage/Homepage";
import ShopPage from "./components/shoppage/ShopPage";
import Header from "./components/layout/Header";
import SignInAndSignUp from "./components/sign-in-and-sign-up/SignInAndSignUp";

import { auth, createUserProfile } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);

        userRef.onSnapshot(snapshot => {
          store.dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          );
          console.log(this.state);
        });
      }
      store.dispatch(setCurrentUser(user));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log(this.state.currentUser);
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

/* const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); */

export default App;
