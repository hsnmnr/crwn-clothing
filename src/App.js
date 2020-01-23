import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubcribeFromAuth = null;

  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // if user logged in
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log("Snap Shot : ", snapShot.data());
          this.setState({
            currentUser: {
              // currentUser != null
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth }); // or currentUser = null
      }
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
