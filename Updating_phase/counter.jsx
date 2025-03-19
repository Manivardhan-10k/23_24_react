import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.count !== undefined && nextProps.count !== prevState.count) {
      return { count: nextProps.count };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("Next Props:", nextProps, "Next State:", nextState);
    // console.log(nextProps.count !== this.state.count || nextState.count !== this.state.count)
    return nextProps.count !== this.state.count || nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log("Previous Count:", prevState.count);
    return prevState.count; // Returning snapshot value (optional)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("Previous Props:", prevProps, "Previous State:", prevState);
    console.log("Snapshot Before Update:", snapshot);
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count+1}));
  };

  render() {
    console.log("Rendering");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
