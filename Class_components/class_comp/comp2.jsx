import React from "react";

class Secondcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 10,
    };
    console.log(props.n);
  }
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          increment
        </button>
        <button onClick={this.handleDecrement}>decrement</button>
      </>
    );
  }
}
export default Secondcomp;
