import React, { useState, useEffect } from "react";
import EnterStore from "./components/EnterStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  const [username, setUsername] = useState(null);
  const [images, setImages] = useState(null);

  return (
    <Router>
      <div>
        <Header />
        {
          //username && <div>welcome {username}</div>
        }
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <EnterStore {...props} setUsername={setUsername} />
            )}
          />

          {
            // BUY IN THE SHOP PAGE
          }
          <Route
            exact
            path="/store/:username"
            render={props => (
              <Store
                {...props}
                setImages={setImages}
                images={images}
                username={username}
              />
            )}
          />

          {
            // EDIT THE SHOP PAGE
          }
          <Route
            exact
            path="/store/:username/edit"
            render={props => <h1>J'édite de {props.match.params.username}</h1>}
          />

          {
            // OUT OF PATH
          }
          <Route>
            <p>ERREUR</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
