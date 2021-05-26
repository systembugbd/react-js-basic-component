import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
    };

    this.handelClick = this.handelClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  handelClick(e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
    console.log(this.state.isToggleOn);
  }

  render() {
    return (
      <div>
        <button onClick={this.handelClick}>
          {this.state.isToggleOn ? "Hide Name" : "Show Name"}
        </button>

        <h1>Class Component: {this.state.date.toLocaleTimeString()}</h1>
        <h4>{this.state.isToggleOn ? this.props.name : ""} </h4>
      </div>
    );
  }
}

export class Clock2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    };
    this.handelClick2 = this.handelClick2.bind(this);
    this.handelClick3 = this.handelClick3.bind(this);
  }

  componentDidMount() {
    this.timer2 = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handelClick2(e) {
    this.setState((state) => ({
      count: state.count + 1,
    }));

    if (this.state.count >= 10) {
      this.setState({
        count: 10,
      });
      return;
    }
  }
  handelClick3(e) {
    if (this.state.count <= 0) {
      this.setState((state) => ({
        count: 0,
      }));
      return;
    }

    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h3>Hello World</h3>
        <button onClick={this.handelClick2}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.handelClick3}>-</button>

        <h3>
          I am from Cock2 Class Component:{" "}
          {this.state.date.toLocaleTimeString()}
        </h3>
      </div>
    );
  }
}
