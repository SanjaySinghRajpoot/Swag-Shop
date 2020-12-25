import React, { Component } from "react";
import "./product-condensed.css";

class productcondensed extends Component() {
  render() {
    // render= show on screen
    return (
      <li className="list-group-item pc-condensed">
        <a className="btn btn-outline-danger"> X </a>
        <p>   {this.props.product.title} | <b> ${this.props.product.title} </b></p>
      </li>
    );
  }
}

export default productcondensed;
