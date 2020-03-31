import React, { useState, useEffect, useRef } from "react";
import EnterStore from "./components/EnterStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./components/Store";
import Header from "./components/Header";
import { SAMPLE_IMAGES } from "./sample-images";
function App() {
  const [username, setUsername] = useState(null);
  const [images, setImages] = useState(null);

  const addImage = image => {
    const imagesCopy = images;
    imagesCopy[`image${Date.now()}`] = image;
    setImages(imagesCopy);
  };

  useEffect(() => {
    const localStorageImageRef =
      JSON.parse(localStorage.getItem("images")) || SAMPLE_IMAGES;
    setImages(localStorageImageRef);
  }, []);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  });

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
