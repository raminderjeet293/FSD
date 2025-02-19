import Counting from "./Function_counter";
import React, { Component } from "react";
class Button_counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.val}</h3>
        <button onClick={this.props.change}>Click here for increement</button>
      </div>
    );
  }
}
export default Counting(Button_counter);
