import { Component } from "react";

const Counting = (OC) => {
  return class Functionality_Counter extends Component {
    constructor(props) {
      super(props);
      this.state = { cnt: 0 };
    }
    increement = () => {
      this.setState({ cnt: this.state.cnt + 1 });
    };
    render() {
      return (
        <div>
          <OC val={this.state.cnt} change={this.increement} />
        </div>
      );
    }
  };
};
export default Counting;
