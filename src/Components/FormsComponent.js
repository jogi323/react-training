import React, { Component } from 'react'

export default class FormsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            rememberMe: false,
            errorMessages: {}
        }
    }

    validateInputs = (key, value) => {
        const { errorMessages } = this.state;
        if (key === "username") {
            if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value)) {
                // errorMessages[key] = ""
                return true;
            } else {
                // errorMessages[key] = "Please enter valid email";
                return false;
            }

        } else if (key === "password") {
            if (value && value?.length < 6) {
                return false;
                // true "Password should be greater than 6 letters."
            } else {
                return true
            }
        }
        this.setState({errorMessages});
    }
    handleInputChange = (e) => {
        let key = e.target.name;
        let value = e.target.type === "checkbox" ? e.target.checked :e.target.value;
        this.setState({
            [key]: value
        }, () => {
            // this.validateInputs(key, value);
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { username, password, errorMessages } = this.state;
        let isUserNameValid = this.validateInputs("username", username);
        let isPasswordValid = this.validateInputs("password",password);
        if (isUserNameValid) {
            errorMessages["username"] = ""
        } else {
            errorMessages["username"] = "Please enter valid email"
        }
        if (isPasswordValid) {
            errorMessages["password"] = ""
        } else {
            errorMessages["password"] = "Password should be greater than 6 letters.";
        }
        if (isUserNameValid && isPasswordValid) {
            console.log(this.state);
        }
        this.setState({errorMessages: errorMessages});
        // if (isUserNameValid && isPasswordValid) {
        //     console.log(this.state);
        //     this.setState({isFormInvalid: false})
        // } else {
        //     this.setState({isFormInvalid: true});
        // }
    }
    render() {
        const { username, password,  rememberMe, errorMessages, isFormInvalid } = this.state;
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
