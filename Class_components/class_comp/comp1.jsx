import React from "react";

class Firstcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "manivardhan",
    };
    console.log("constructor", props);
  }

  render() {
    return (
      <>
        <h2>{this.state.name}</h2>
        <h1>{this.state.count}</h1>
        <h3>{"hello " + this.props.user}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 10 })}>
          increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrement
        </button>
      </>
    );
  }
}
export default Firstcomp;
