import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import EnterStore from "./components/EnterStore";
import Header from "./components/Header";

export const Router = () => {

  return (<BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Fragment>
            <Header {...props} />
            <EnterStore {...props} />
          </Fragment>
        )}
      />
      <Route
        path="/store/:username"
        render={props => (
          <Fragment>
            <Header {...props} />
            <App {...props} />
          </Fragment>
        )}
      />
      <Route />
    </Switch>
  </BrowserRouter>)
}
