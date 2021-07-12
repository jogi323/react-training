import React, { Component } from 'react'

export default class LifeCyclesComponents extends Component {
    constructor(props) {
        super(props);
        console.log("constructor", new Date());
        this.state = {
            name: "Angular"
        }
    }
    static getDerivedStateFromProps (props, state) {
        console.log("getDerivedStateFromProps", new Date());
        if (state.name !== props.name) {
            return {
                name: props.name
            }
        }
    }
    componentDidMount = () => {
        console.log("componentDidmount", new Date());
        this.setState({name: "React"});
        this.interval = setInterval(() => {
            // updateTime(new Date().toLocaleTimeString())
          }, 1000);
    }
    shouldComponentUpdate = () => {
        console.log("getSnapshotBeforeUpdate", new Date());
        return true;
    }
    getSnapshotBeforeUpdate = (props, state) => {
        console.log("getSnapshotBeforeUpdate", new Date());
        return null;
    }
    componentDidUpdate = () => {
        console.log("componentDidUpdate", new Date())
    }

    componentWillUnmount = () => {
      console.log("componentWillUnmount", new Date())  
      clearInterval(this.interval)
    }
    render() {
        console.log("Render", new Date());
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
