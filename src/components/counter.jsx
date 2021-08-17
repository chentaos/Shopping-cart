import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   // tag: ["tag1", "tag2", "tag3"],
  //   tag: [],
  // };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  render() {
    //console.log(this.props);

    return (
      <div>
        {/* <h5>Counter #{this.props.id}</h5> */}
        {/* <img src={this.state.imageURL} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <br />
        {this.state.tag.length === 0 && "Please create a tag"}
        <br />
        {this.renderTags()} */}
      </div>
    );
  }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // renderTags() {
  //   if (this.state.tag.length === 0) return <p>There is no tag</p>;
  //   return (
  //     <ul>
  //       {this.state.tag.map((t) => (
  //         <li key={t}>{t}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
