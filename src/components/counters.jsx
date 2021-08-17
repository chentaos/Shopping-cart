import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counterss, onReset, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counterss.map((cc) => (
          <Counter
            key={cc.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={cc}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
