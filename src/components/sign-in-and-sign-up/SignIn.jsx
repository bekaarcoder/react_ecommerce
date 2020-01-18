import React, { Component } from "react";
import FormInput from "../commons/forminput/FormInput";

import "./signInAndSignUp.style.scss";
import FormButton from "../commons/button/FormButton";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="signin-form">
        <h2 className="form-header">I already have an account</h2>
        <div className="form-header-subtitle">
          Sign in with your email and password
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormButton type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
}

export default SignIn;
