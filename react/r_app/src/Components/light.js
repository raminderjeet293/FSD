import { Component } from "react";

export class Light extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Like", count: 0 };
  }

  new_state = () => {
    if (this.state.text === "Like") this.setState({ text: "Unlike", count: 1 });
    else this.setState({ text: "Like", count: 0 });
  };
  render() {
    return (
      <div>
        <h2 onClick={this.new_state}>
          {this.state.text}
          {this.state.count}
        </h2>
      </div>
    );
  }
}
