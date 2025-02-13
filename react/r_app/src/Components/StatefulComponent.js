import { Component } from "react";

export class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Like" };
  }

  new_state = () => {
    if (this.state.text === "Like") this.setState({ text: "Unlike" });
    else this.setState({ text: "Like" });
  };
  render() {
    return (
      <div>
        <h2 onClick={this.new_state}>{this.state.text}</h2>
      </div>
    );
  }
}
