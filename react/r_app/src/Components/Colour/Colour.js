import { Component } from "react";

export class Colour extends Component {
  constructor(props) {
    super(props);
    this.state = { colour: "red" };
  }

  change_colour = () => {
    this.setState({ colour: "red" });
  };

  render() {
    return (
      <div>
        <p className="{this.state.colour}"> hello </p>
        <button className="red" onClick={this.change_colour}>
          Red
        </button>
        {/* <button onClick={this.decreement}>-</button>
        <button onClick={this.decreement}>-</button> */}
      </div>
    );
  }
}

export default Colour;
