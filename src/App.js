import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
  state = {
    random: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelDelete = (counterID) => {
    const counters = this.state.random.filter((c) => c.id !== counterID);
    this.setState({ random: counters });
  };

  handleReset = () => {
    const counters = this.state.random.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ random: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.random];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ random: counters });
  };

  render() {
    //console.log(this);
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.random.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counterss={this.state.random}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handelDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
