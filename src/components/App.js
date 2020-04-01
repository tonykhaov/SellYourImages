import React, { Component } from "react";
import _ from "lodash";
import Store from "./Store";
import base from "../base";
import { SAMPLE_IMAGES } from "../sample-images";

class App extends Component {
  state = {
    images: {},
    order: {}
  };

  addImage = image => {
    const imagesCopy = this.state.images;
    imagesCopy[`image${Date.now()}`] = image;
    this.setState({ images: imagesCopy });
  };

  deleteImage = image => {
    // remove from the state
    // const imagesCopy = this.state.images;
    // delete imagesCopy[image];
    // this.setState({ images: imagesCopy });
    this.removeFromFirebase(image);
  };

  removeFromFirebase = key => {
    base.remove(`images/${key}`);
  };

  componentDidMount() {
    // const localStorageImageRef = JSON.parse(localStorage.getItem("images"));
    // if (!localStorageImageRef) this.setState({ images: SAMPLE_IMAGES });
    // else this.setState({ images: localStorageImageRef });
    this.ref = base.syncState("images", {
      context: this,
      state: "images"
    });
    if (_.isEmpty(this.state.images)) this.setState({ images: SAMPLE_IMAGES });
  }

  componentDidUpdate() {
    // const { username } = this.props.match.params;
    // localStorage.setItem(`${username}`, JSON.stringify(this.state.images));
  }
  render() {
    return (
      <>
        <Store
          images={this.state.images}
          addImage={this.addImage}
          deleteImage={this.deleteImage}
          {...this.props}
        />
      </>
    );
  }
}

export default App;
