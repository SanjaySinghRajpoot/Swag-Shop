import React, { Component } from "react";
import "./product-condensed.css";

class productcondensed extends Component() {
  render() {
    // render= show on screen
    return (
      <li className="list group-item">
        <a className="btn btn-outline-danger">
          {this.props.product.title} | {this.props.product.title}
        </a>
      </li>
    );
  }
}

export default productcondensed;
