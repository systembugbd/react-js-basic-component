import React, { Component } from "react";

export default class FormClass extends Component {

     constructor(props) {
          super(props);
          this.state={
               email:"",
               password:"",
          };
          this.handelOnChangeEmail = this.handelOnChangeEmail.bind(this)
          this.handelOnChangePassword = this.handelOnChangePassword.bind(this)
          this.handelOnSubmit = this.handelOnSubmit.bind(this)

     }

     handelOnChangeEmail(e){
          console.log(e.target.value)
          this.setState({email: e.target.value})
     }
     handelOnChangePassword(e){
          this.setState({password: e.target.value})
          console.log(e.target.value)
     }
     handelOnSubmit(e){
          e.preventDefault()
          console.log(
               `
               Email : ${this.state.email},
               Password: ${this.state.password}
               `
          )
     }


  render() {
    return (
      <div>
        <fieldset>
          <legend>Login Form</legend>
          <form onSubmit={this.handelOnSubmit}>
            <div>
              <label htmlFor="email">
                Name:
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  placeholder="Input your email"
                  onChange={this.handelOnChangeEmail}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                {" "}
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Input your password"
                  value={this.state.password}
                  onChange={this.handelOnChangePassword}
                />
              </label>
            </div>

            <div>
              <button type="submit">Log In</button>
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}
