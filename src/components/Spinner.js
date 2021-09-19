import React, { Component } from "react";
import loading from "./loading.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="mt-2 d-flex flex-column align-items-center mb-3">
        <img src={loading} alt={loading} />
      </div>
    );
  }
}
