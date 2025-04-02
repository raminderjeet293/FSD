import React, { Component } from "react";

export default class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ts: "",
      ts1: "",
    };
  }
  func_ts = (e) => {
    this.setState({ ts: e.target.value });
  };
  func_ts1 = (e) => {
    this.setState({ ts1: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.ts}
          onChange={this.func_ts}
          placeholder="Enter name"
        ></input>
        <input
          type="text"
          value={this.state.ts1}
          onChange={this.func_ts1}
          placeholder="Enter password"
        ></input>
      </div>
    );
  }
}
