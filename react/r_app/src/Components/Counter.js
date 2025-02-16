import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decreement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increement}>+</button>
        <button onClick={this.decreement}>-</button>
      </div>
    );
  }
}
