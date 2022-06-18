import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h3>Celcius: {this.props.temp} Celcius</h3>
      </div>
    );
  }
}