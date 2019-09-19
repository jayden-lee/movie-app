import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  plus = () => {
    console.log("plus");
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: this.state.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I just updated")
  }

  render() {
    console.log("redering");
    return (
       <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
