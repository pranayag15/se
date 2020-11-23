import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import "../styles/homepage.css";
import { Jumbotron, Container } from "reactstrap";
import { message } from "antd";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      password: "",
      name: "",
      email: "",
      redirectToReferrer: false,
      redirectToLogin: false,
      redirectToRegister: false,
      redirectToRegister2: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

    this.register = this.register.bind(this);
    this.renderCreateForm = this.renderCreateForm.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageChange2 = this.handlePageChange2.bind(this);
  }

  login() {
    if (this.state.username && this.state.password) {
      message.success("Login succesfull!");
      if (this.state.username === "mohit" || this.state.username === "veenu" || this.state.username === "akhil")
        this.props.history.push({
          pathname: "/customer",
          state: { username: this.state.username },
        });
      return this.setState({ redirectToReferrer: true });
    }
    message.error("Enter credentials!");
  }
  register(event) {
    event.preventDefault();
    this.setState({ redirectToReferrer: true });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderCreateForm() {
    return (
      <form onSubmit={this.register}>
        <div className="form-group row">
          <input type="hidden" name="id" value={this.state.id} />
        </div>
        <div className="form-group row">
          <label className=" control-label col-md-12" htmlFor="Name">
            Name
          </label>
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue={this.state.name}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-12" htmlFor="password">
            Password
          </label>
          <div className="col-md-4">
            <input
              className="form-control"
              data-val="true"
              name="password"
              defaultValue={this.state.password}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-12" htmlFor="email">
            Email
          </label>
          <div className="col-md-4">
            <input
              className="form-control"
              type="text"
              name="email"
              defaultValue={this.state.email}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-default">
            Save
          </button>
          <button className="btn" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
  handlePageChange() {
    this.setState({ redirectToRegister: true });
  }
  handlePageChange2() {
    this.setState({ redirectToRegister2: true });
  }
  render() {
    // console.log(this.props)
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/fetchemployee"} />;
    }
    if (this.state.redirectToLogin) {
      return <Redirect to={"/home"} />;
    }
    if (this.state.redirectToRegister) {
      return <Redirect to={"/register"} />;
    }

    if (this.state.redirectToRegister2) {
      return <Redirect to={"/logindelivery"} />;
    }

    return (
      <div className="col-md-6 col-md-offset-2">
        <h1 id="h">Newspaper Agency Automation</h1>
        <div className="Login">
          <div id="bck">
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                name="username"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                name="password"
                onChange={this.onChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              onClick={this.login}
              type="submit"
              value="Login"
            >
              <div id="t">Login</div>
            </Button>

            <Button
              block
              bsSize="large"
              onClick={this.handlePageChange}
              type="submit"
              value="Login"
            >
              <div id="t"> Register </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
