import React, { useState } from "react";
import EnterStore from "./components/EnterStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store";
import Header from "./components/Header";

function App() {
  const [username, setUsername] = useState(null);
  const [images, setImages] = useState(null);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Store
                {...props}
                setImages={setImages}
                images={images}
                username={username}
              />
            )}
          />
          <Route
            render={props => (
              <EnterStore {...props} setUsername={setUsername} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
