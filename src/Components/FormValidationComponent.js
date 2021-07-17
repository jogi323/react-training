import React, { Component } from 'react';
import validate from "validate.js";

export default class FormValidationsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            rememberMe: false,
            errorMessages: {},
            cpassword: ""
        }
        this.constraints  = {
            username: {
              presence: {
                message: "Username cannot be blank"
              },
              email: {
                message: "Please enter valid email."
              }
            },
            password: {
              presence: {
                message: "Password cannot be blank"
              },
              length: {
                minimum: 6,
                message: "must be at least 6 characters"
              }
            },
            cpassword: {
                equality: "password"
            }
          };
          const arr = [1,2,3,4];
          const arr1 = [5,6,7,8];
          const arr3 = [...arr, ...arr1];
          arr[1] = 10;
          console.log(arr3, arr);
          const a = [4,5,6];
          const b = a;
          a[0]= 10;
          console.log(b, a);
          const x = 10 + "," + "react";
          const y = `${arr[1]} React`; // template literals
          console.log(x, y);
    };

    validateInputs = (field, value) => {
        let object = {};
        object[field] = value;
        if (field === "cpassword") {
            object["password"] = this.state.password
        }
        let constraint = this.constraints[field];

      console.log("Constraint", object);

        let result = validate(object, {[field]: constraint});

        console.log(result);
        if (result) {
            return result[field][0];
        }

        return null;
    }

    componentDidMount = () => {
        this.testMethod();
    }

    testMethod = (obj = {}) => {
        console.log(obj.name);
    }

    handleInputChange = (e) => {
        const { errorMessages } = this.state;
        let key = e.target.name;
        let value = e.target.type === "checkbox" ? e.target.checked :e.target.value;
        let errorMessage = this.validateInputs(key, value);
        errorMessages[key] = errorMessage;
        console.log(errorMessages);
        this.setState({
            [key]: value,
            errorMessages: errorMessages
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
       this.props.onFormSubmit({username: this.state.username, password: this.state.password});
    }
    render() {
        const { username, password,  rememberMe, errorMessages, isFormInvalid, cpassword } = this.state;
        // console.log(errorMessages);
        return (
            <div className="container col-6">
            <form>
                {isFormInvalid && <small id="emailHelp" className="form-text text-muted">Invalid username or Password</small>}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="username" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={username} onChange={this.handleInputChange}/>
                    {errorMessages.username && <small id="emailHelp" className="form-text text-muted">{errorMessages.username}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleInputChange}/>
                    {errorMessages.password && <small id="emailHelp" className="form-text text-muted">{errorMessages.password}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input name="cpassword" type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" value={cpassword} onChange={this.handleInputChange}/>
                    {errorMessages.cpassword && <small id="emailHelp" className="form-text text-muted">{errorMessages.cpassword}</small>}
                </div>
                <div className="form-group form-check">
                    <input name="rememberMe" type="checkbox" className="form-check-input" id="exampleCheck1" checked={rememberMe} onChange={this.handleInputChange}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}
