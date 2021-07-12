import React, { Component } from 'react'

export default class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            createdBy: "Facebook",
            address: {
                group: {

                }
            }
        }
    }
    handleChange = () => {
        this.setState({
           name: "Angular",
           documentation: "angular.io"
        }, () => {
        console.log(this.state.name);
        });
        console.log(this.state.name);
        this.forceUpdate();
    }
    render() {
        console.log(this.props);
        const { name, createdBy } = this.state;
        const { appName } = this.props;
        return (
            <div>
                {this.props.appName}
                <button onClick={this.handleChange}>Change the name</button>
                {name} - {createdBy}
            </div>
        )
    }
}
