import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //   };

  // To bind event handler
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("Constructor",this);
  //   }

  //For Value Increment
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   doHandleIncrement = () => {
  //       this.handleIncrement({ id: 1});
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
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
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
