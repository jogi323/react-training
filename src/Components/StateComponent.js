import React, { Component } from 'react'
import  validate from 'validate.js';
export default class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            createdBy: "Facebook",
            userName: "",
            password: "",
            errors:{}
        }
        this.constraints = {
            userName: {
              presence: {
                message: "Cannot be blank."
              },
              email: {
                message: 'Please enter a valid email address'
              }
            },
            password: {
              presence: {
                message: "Cannot be blank."
              },
              length: {
                minimum: 5,
                message: 'Your password must be at least 5 characters'
              }
            }
          }
          
        // this.handleChange = this.handleChange.bind(this);
    }

    validator = (field, value) => {
        // Creates an object based on the field name and field value
        // e.g. let object = {email: 'email@example.com'}
        let object = {}
        object[field] = value
      
        let constraint = this.constraints[field]
        console.log(object, constraint)
      
        // Validate against the constraint and hold the error messages
        const result = validate(object, { [field]: constraint })
        console.log(object, constraint, result)
      
        // If there is an error message, return it!
        if (result) {
          // Return only the field error message if there are multiple
          return result[field][0]
        }
      
        return null
      }
    
    handleChange = (event, data) => {
        console.log(event, data);
        this.setState({
            name: "Angular",
            documentation: "angular.io"
        }, () => {
            console.log(this.state.name);
        });
        console.log(this.state.name);
        this.forceUpdate();
    }
    handleInputChange = (e) => {
        const {errors} = this.state;
        let key = e.target.name;
        let value = e.target.value;
        let errorMessage = this.validator(key, value);
        errors[key] = errorMessage;
        this.setState({
            [key]: value,
            errors: errors
        }, (e) => {
        })
    }
    render() {
        console.log(this.props);
        const { name, createdBy, errors } = this.state;
        const { appName } = this.props;
        return (
            <div>
                {this.props.appName}
                <button onClick={(e)=>this.handleChange(e, "Data")}>Change the name</button>
                {name} - {createdBy}
                {/* <form>
                    <label>
                        username:
                        <input
                            name="userName"
                            type="text"
                            checked={this.state.userName}
                            onChange={this.handleInputChange} />
                            {errors.userName && <p>{errors.userName}</p>}
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                            {errors.password && <p>{errors.password}</p>}
                    </label>
                </form> */}
            </div>
        )
    }
}
