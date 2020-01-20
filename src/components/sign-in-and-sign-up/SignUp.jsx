import React, { Component } from "react";
import FormInput from "../commons/forminput/FormInput";
import FormButton from "../commons/button/FormButton";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      console.log("Password does not match.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName: name });
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
  render() {
    return (
      <div className="signup-form">
        <h2 className="form-header">I don't have an account</h2>
        <div className="form-header-subtitle">
          Sign up with you email and password
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            required
            label="Display Name"
            onChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            required
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="Password"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <FormButton type="submit" value="SIGN UP" className="btn" />
        </form>
      </div>
    );
  }
}

export default SignUp;
