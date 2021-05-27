import React, { Component } from "react";
import Clock, { Clock2 } from "./Clock";

export default class Rendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handelLogedInClick = this.handelLogedInClick.bind(this);
    this.handelLogedOutClick = this.handelLogedOutClick.bind(this);
  }

  handelLogedInClick() {
    this.setState({ isLoggedIn: true });
  }
  handelLogedOutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    let isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) button = <Logout onClick={this.handelLogedOutClick} />;
    else button = <LogedIn onClick={this.handelLogedInClick} />;

    return (
      <div>
        {button}
        <Greetings isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <Clock name="Shaheb Ali" /> : ""}
        {isLoggedIn ? <Clock2 /> : ""}
      </div>
    );
  }
}

function LogedIn(props) {
  return <button onClick={props.onClick}>LogIn</button>;
}

function Logout(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}

function Greetings(props) {
  if (props.isLoggedIn) {
    return <h3>loged In successfully</h3>;
  } else {
    return <h3>loged Out successfully</h3>;
  }
}
