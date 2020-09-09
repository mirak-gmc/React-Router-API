import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/profile/:userId" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
