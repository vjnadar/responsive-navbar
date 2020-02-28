import React from "react";
import Home from "../../components/TestMainComponents/Main/Main";
import Login from "../../components/TestMainComponents/LoginDummy/Login";
import { Route,Switch } from "react-router-dom";

const TestMain: React.FC = props => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
export default TestMain;
