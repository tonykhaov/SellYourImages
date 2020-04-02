import React, { Fragment, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import EnterStore from "./components/EnterStore";
import Header from "./components/Header";

export const Router = () => {
  const [order, setOrder] = useState({});
  const [imagesHook, setImagesHook] = useState({});


  const addToOrder = key => {
    const orderCopy = order;
    orderCopy[key] = orderCopy[key] + 1 || 1;
    setOrder(orderCopy);
  }

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
            <Header {...props} order={order} imagesHook={imagesHook} />
            <App {...props} setImagesHook={setImagesHook} addToOrder={addToOrder} />
          </Fragment>
        )}
      />
      <Route />
    </Switch>
  </BrowserRouter>)
}
