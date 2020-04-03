import React, { Component } from "react";
import _ from "lodash";
import Store from "./Store";
import base from "../base";
import { SAMPLE_IMAGES } from "../sample-images";
import ShoppingCart from "./ShoppingCart";
class App extends Component {
  state = {
    images: {},
    order: {},
  };

  addImage = image => {
    const imagesCopy = this.state.images;
    imagesCopy[`image${Date.now()}`] = image;
    this.setState({ images: imagesCopy });
  };

  addToOrder = key => {
    const orderCopy = this.state.order;
    orderCopy[key] = orderCopy[key] + 1 || 1;
    this.setState({ order: orderCopy });
    console.log(this.state.order)
  }

  removeFromOrder = key => {
    const orderCopy = this.state.order;
    delete orderCopy[key];
    this.setState({ order: orderCopy });
  }

  deleteImage = image => {
    this.removeFromFirebase(image);
  };

  removeFromFirebase = key => {
    base.remove(`images/${key}`);
  };

  componentDidMount() {
    const { username } = this.props.match.params;
    const localStorageOrder = JSON.parse(localStorage.getItem(username));
    if (localStorageOrder) this.setState({ order: localStorageOrder });
    this.ref = base.syncState("images", {
      context: this,
      state: "images"
    });
    if (_.isEmpty(this.state.images)) this.setState({ images: SAMPLE_IMAGES });
  }

  componentDidUpdate() {
    const { username } = this.props.match.params;
    localStorage.setItem(username, JSON.stringify(this.state.order));
  }
  render() {
    return (
      <>
        <Store
          images={this.state.images}
          addImage={this.addImage}
          deleteImage={this.deleteImage}
          order={this.state.order}
          addToOrder={this.addToOrder}
          {...this.props}
        />
        <ShoppingCart order={this.state.order} images={this.state.images} removeFromOrder={this.removeFromOrder} />
      </>
    );
  }
}

export default App;
